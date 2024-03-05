import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
// import GameOver from "./components/GameOver";
// import SvgComponent from "./components/svgComponent";
import '../App.css';
import GameOver from "./Gameover";

const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const generateCards = () => {
    const symbols = ['🐹', '🐰', '🦊', '🐼'];
    const duplicatedSymbols = [...symbols, ...symbols, ...symbols];
    return shuffleArray(duplicatedSymbols);
};
const App = () => {
    const [cards, setCards] = useState(generateCards());
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [points, setPoints] = useState(0);
    const [timer, setTimer] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [showGameOverModal, setShowGameOverModal] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        let interval;

        if (gameStarted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [gameStarted]);

    useEffect(() => {
        let interval;

        if (gameStarted && !gameOver) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    const newTimer = prevTimer++;

                    if (newTimer === 50) {
                        // Game over condition, stop the interval and reset the game
                        clearInterval(interval);
                        setShowGameOverModal(true);
                        setGameOver(true);
                        setTimer(0); // Reset the timer
                        resetGame(); // Reset the whole game
                    } else {
                        return newTimer;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [gameStarted, gameOver]);

    const handleCardClick = (index) => {
        if ( timer >= 50 || gameOver) {
            // If the game hasn't started, the timer has reached the limit, or the game is over, do nothing
            return;
        }

        if (!gameStarted) {
            setGameStarted(true);
        }

        if (flippedIndices.length < 3 && !flippedIndices.includes(index) && !matchedPairs.includes(cards[index])) {
            setFlippedIndices((prev) => [...prev, index]);

            // Check if three cards are flipped
            if (flippedIndices.length === 2) {
                const firstIndex = flippedIndices[0];
                const secondIndex = flippedIndices[1];
                const thirdIndex = index;

                // Check if the symbols match
                if (
                    cards[firstIndex] === cards[secondIndex] &&
                    cards[firstIndex] === cards[thirdIndex]
                ) {
                    // If symbols match, add them to matchedPairs and increase points
                    setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
                    setPoints((prevPoints) => prevPoints + 1);
                    setFlippedIndices([]); // Reset flippedIndices after a successful match
                } else {
                    // If symbols don't match, flip the cards back after a short delay
                    setTimeout(() => {
                        setFlippedIndices([]);
                    }, 1000);
                }
            }
        }
    };



    const resetGame = () => {
        setGameStarted(false);
        setGameOver(false); // Reset game over state
        setTimer(0);
        setPoints(0);
        setCards(generateCards());
        setFlippedIndices([]);
        setMatchedPairs([]);
    };

    const closeGameOverModal = () => {
        setShowGameOverModal(false);
    };

    return (
        <div className="flex mt-5 w-screen justify-center items-center">
            <div>
                <p>Points: {points}</p>
                <p>Time: {timer}s</p>
                <FlipMove>
                    <div className="flex flex-wrap w-[800px] justify-center">
                        {cards.map((symbol, index) => (
                            <div
                                key={index}
                                className={`w-40 h-40 m-2 text-gray-800 font-bold text-2xl flex items-center justify-center rounded-md cursor-pointer card ${flippedIndices.includes(index) || matchedPairs.includes(symbol) ? 'flipped' : ''} ${timer >= 10 || gameOver ? 'unclickable' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="flipper">
                                    <div className="back"><img className="w-[160px] h-[160px]" src="https://i.pinimg.com/originals/90/92/41/909241e43cffbca0ba6bfd0d5107b4c3.png"/></div>
                                    <div className="front">{symbol}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FlipMove>

                {showGameOverModal && (
                    <GameOver onRestart={() => { setShowGameOverModal(false); resetGame(); }} />
                    // console.log("end")
                )}
            </div>
        </div>
    );
};

export default App;