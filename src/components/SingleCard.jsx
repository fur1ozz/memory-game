import React from 'react';
import '../styles/TheCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }

    return (
        <div className="relative w-[150px] h-[150px]">
            <div className={"absolute w-full h-full the-card " + (flipped ? "rotateY180" : "")}>
                <img
                    src={card.src}
                    className="absolute w-full h-full bg-primary rotateY180 justify-center items-center flex border-2 border-white rounded-[6px]"
                    alt="card fornt"
                />
                <img
                    src="/img/covers/cover2.jpg"
                    onClick={handleClick}
                    className="absolute w-full h-full block border-2 border-white rounded-[6px] bface-v"
                    alt="card backside"
                />
            </div>
        </div>
    );
};

export default SingleCard;