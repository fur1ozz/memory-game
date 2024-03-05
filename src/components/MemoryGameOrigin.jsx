import React, {useEffect, useState} from 'react';
import SingleCard from "./SingleCard";

const cardImages = [
    { "src": "🐹", matched: false },
    { "src": "🐶", matched: false },
    { "src": "🦊", matched: false },
    { "src": "🐼", matched: false },
    { "src": "🐻", matched: false },
    { "src": "🐮", matched: false },
]
const MemoryGameOrigin = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [selectedIds, setSelectedIds] = useState([]);

    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const [disabled, setDisabled] = useState(false)
    
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setChoiceOne(null)
        setChoiceTwo(null)

        setCards(shuffledCards)
        setTurns(0)
    }

    // make a check if the src id has already been pressed/selected, for not a glitch
    // Probably make new array that saves pressed/selected choices and then also make that they got deleted from selected if theres no match
    // const handleChoice = (card) => {
    //     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // }
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
        <div className="bg-white">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">White Match</h1>
            <button onClick={shuffleCards} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Fresh Game</button>

            <div className="mt-[40px] grid grid-cols-4 gap-[20px]">
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
            <p>Turns: {turns}</p>
        </div>
    );
};

export default MemoryGameOrigin;