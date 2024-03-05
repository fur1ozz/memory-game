import React from 'react';
import '../styles/TheCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }

    return (
        <div className="relative w-[250px] h-[320px]">
            <div className={"absolute w-full h-full the-card " + (flipped ? "rotateY180" : "")}>
                <div className="absolute w-full h-full bg-amber-600 rotateY180 justify-center items-center flex border-2 border-white rounded-[6px]">{card.src}</div>
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