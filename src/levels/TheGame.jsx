import React, { useEffect, useRef, useState } from 'react';
import SingleCard from "../components/SingleCard";
import matchedSound from '../sounds/sound1.mp3';
import cardImages from '../level-utils/CardImages';
import {useLocation} from "react-router-dom";

const choiceCount = 2;
const matchCount = 2;

const TheGame = ({ timeTrial }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const level = queryParams.get('level');

    const [cards, setCards] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [choices, setChoices] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [timer, setTimer] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [turns, setTurns] = useState(0);

    const matchedAudio = useRef(new Audio(matchedSound));

    const playMatchSound = () => {
        matchedAudio.current.volume = 0.4;
        matchedAudio.current.play();
    };

    const shuffleCards = () => {
        const selectedCards = cardImages.slice(0, matchCount);
        const shuffledCards = [];

        for (let i = 0; i < matchCount; i++) {
            for (let j = 0; j < choiceCount; j++) {
                shuffledCards.push({ ...selectedCards[i], id: i * choiceCount + j });
            }
        }

        setChoices([]);
        setCards(shuffledCards.sort(() => Math.random() - 0.5));
        setDisabled(false);
        setTurns(0);
        setTimer(0);
    }

    const startOver = () => {
        setCards(prevCards => prevCards.map((card) => ({ ...card, matched: false })));
        setDisabled(true);
        setTimeout(() => shuffleCards(), 500);
    }

    const handleChoice = (card) => {
        if (selectedIds.includes(card.id)) {
            return;
        }

        if (choices.length === choiceCount) {
            return;
        }

        if (!timerRunning && timeTrial) {
            setTimerRunning(true);
            console.log("timer is running");
        }

        setChoices([...choices, card]);

        setSelectedIds([...selectedIds, card.id]);
    };

    useEffect(() => {
        if (choices.length !== choiceCount) {
            return;
        }

        setDisabled(true);

        if (choices.every(choice => choice.src === choices[0].src)) {
            playMatchSound();
            setCards(prevCards => {
                return prevCards.map(card => {
                    if (choices.some(choice => choice.id === card.id)) {
                        return { ...card, matched: true };
                    }
                    return card;
                });
            });
        }

        setTurns(prevTurns => prevTurns + 1);
        setTimeout(() => resetTurn(), 1000);

    }, [choices]);

    useEffect(() => {
        let intervalId;

        if (timerRunning) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timerRunning]);

    // Winning function
    // TODO create popup after winning
    useEffect(() => {
        if (cards.length > 0 && cards.every(card => card.matched)) {
            console.log("You won!");
            setTimerRunning(false);
        }
    }, [cards]);

    const resetTurn = () => {
        setChoices([]);
        setSelectedIds([]);
        setDisabled(false);
    }

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="mt-[70px] max-h-screen w-full">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl">{timeTrial ? 'time trial' : 'Main'}</h1>
            <button onClick={startOver} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start again</button>

            <div className="flex justify-center">
                <div className="mt-[40px] grid grid-cols-4 gap-[20px] w-fit">
                    {cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={selectedIds.includes(card.id) || card.matched}
                            disabled={disabled || card.matched}
                        />
                    ))}
                </div>
            </div>

            {timeTrial ? (
                <p>Timer: {timer} seconds</p>
            ) : (
                <p>Turns: {turns}</p>
            )}
        </div>
    );
};

export default TheGame;
