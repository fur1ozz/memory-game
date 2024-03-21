import React from 'react';
import PageWithHeader from "../utils/PageWithHeader";
import {Link} from "react-router-dom";

const Levels = () => {
    return (
        <PageWithHeader>
            <div className="flex flex-col">
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden justify-between"
                    style={{backgroundImage: 'url("/img/levels-bg/main-levels.jpg")'}}
                    to="main"
                >
                    <div>Main Levels</div>
                    <div>0/12</div>

                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden justify-between"
                    style={{backgroundImage: 'url("/img/levels-bg/time-trial.jpg")'}}
                    to="time-trial"
                >
                    <div>Time Trial</div>
                    <div>0/12</div>

                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden"
                    style={{backgroundImage: 'url("/img/levels-bg/daily-levels.jpg")'}}
                    to="daily"
                >
                    <div>Daily Levels</div>
                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden"
                    style={{backgroundImage: 'url("/img/levels-bg/free-mode.jpg")'}}
                    to="free-mpode"
                >
                    <div>Free Mode</div>
                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden"
                    style={{backgroundImage: 'url("/img/levels-bg/multiplayer.jpg")'}}
                    to="multiplayer"
                >
                    <div>Multiplayer</div>
                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
            </div>
        </PageWithHeader>
    );
};

export default Levels;