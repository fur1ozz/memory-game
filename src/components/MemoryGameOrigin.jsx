import React, {useEffect, useRef, useState} from 'react';
import SingleCard from "./SingleCard";
import matchedSound from '../sounds/sound1.mp3';

const cardImages = [
    { "src": "/img/matches/audi.png", matched: false },
    { "src": "/img/matches/ford.png", matched: false },
    { "src": "/img/matches/honda.png", matched: false },
    { "src": "/img/matches/toyota.png", matched: false },
    { "src": "/img/matches/volvo.png", matched: false },
    { "src": "/img/matches/micuks.png", matched: false },
    { "src": "/img/matches/saab.png", matched: false },
]
const MemoryGameOrigin = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [selectedIds, setSelectedIds] = useState([]);

    const matchedAudio = useRef(new Audio(matchedSound));

    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const [disabled, setDisabled] = useState(false)

    const playMatchSound = () => {
        matchedAudio.current.volume = 0.4;
        matchedAudio.current.play();
    };

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setSelectedIds([]);
        setChoiceOne(null)
        setChoiceTwo(null)

        setCards(shuffledCards)
        setTurns(0)
        setDisabled(false);
    }

    const startOver = () => {
        setCards((prevCards) => prevCards.map((card) => ({ ...card, matched: false })));
        setDisabled(true);
        setTimeout(() => shuffleCards(), 500);
    }
    const handleChoice = (card) => {
        if (selectedIds.includes(card.id)) {
            return;
        }

        if (choiceOne && choiceTwo) {
            return;
        }

        if (!choiceOne) {
            setChoiceOne(card);
        } else {
            setChoiceTwo(card);
        }

        setSelectedIds([...selectedIds, card.id]);
    };

    useEffect(() => {
        if (!choiceOne || !choiceTwo) {
            return;
        }

        setDisabled(true);

        if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
                return prevCards.map(card => {
                    if (card.src === choiceOne.src) {
                        playMatchSound();
                        return { ...card, matched: true };
                    }
                    return card;
                });
            });
            resetTurn();
        } else {
            setSelectedIds(selectedIds.filter((id) => ![choiceOne.id, choiceTwo.id].includes(id)));
            setTimeout(() => resetTurn(), 1000);
        }
    }, [choiceOne, choiceTwo]);


    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className="mt-[70px] max-h-screen w-full">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl">White Match</h1>
            {/*<button onClick={shuffleCards} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Fresh Game</button>*/}
            <button onClick={startOver} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start again</button>

            <div className="flex justify-center">
                <div className="mt-[40px] grid grid-cols-4 gap-[20px] w-fit">
                    {cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            <p>Turns: {turns}</p>
        </div>
    );
};

export default MemoryGameOrigin;