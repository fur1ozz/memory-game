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
    const [choiceThree, setChoiceThree] = useState(null)

    const [disabled, setDisabled] = useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setSelectedIds([]);
        setChoiceOne(null)
        setChoiceTwo(null)
        setChoiceThree(null)

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

        if (choiceOne && choiceTwo && choiceThree) {
            return;
        }

        if (!choiceOne) {
            setChoiceOne(card);
        } else if (!choiceTwo){
            setChoiceTwo(card);
        } else {
            setChoiceThree(card);
        }

        setSelectedIds([...selectedIds, card.id]);
    };

    useEffect(() => {
        if (!choiceOne || !choiceTwo || !choiceThree) {
            return;
        }

        setDisabled(true);

        if (choiceOne.src === choiceTwo.src && choiceTwo.src === choiceThree.src) {
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
            setSelectedIds(selectedIds.filter((id) => ![choiceOne.id, choiceTwo.id, choiceThree.id].includes(id)));
            setTimeout(() => resetTurn(), 1000);
        }
    }, [choiceOne, choiceTwo, choiceThree]);


    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setChoiceThree(null)
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
            <button onClick={startOver} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start again</button>

            <div className="mt-[40px] grid grid-cols-4 gap-[20px]">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card === choiceThree || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    );
};

export default MemoryGameOrigin;