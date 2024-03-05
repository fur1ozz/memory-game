import React from 'react';

const GameOver = ({ onRestart }) => {
    return (
        <div className="absolute inset-0 flex  items-center top-[-200px] justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-8 rounded-md text-center">
                <h2 className="text-red-500 text-2xl font-bold mb-4">You Lose!</h2>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    onClick={onRestart}
                >
                    Restart
                </button>
            </div>
        </div>
    );
};

export default GameOver;