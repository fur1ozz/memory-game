import React, {useEffect, useState} from 'react';
import PageWithHeader from "../utils/PageWithHeader";
import {Link} from "react-router-dom";
import axios from "axios";

const Levels = () => {
    const [mainLevelsCount, setMainLevelsCount] = useState(0);
    const [timeTrialCount, setTimeTrialCount] = useState(0);

    useEffect(() => {
        // Fetch main levels count
        axios.get('http://localhost/api/main-levels/count')
            .then(response => {
                setMainLevelsCount(response.data.level_count);
            })
            .catch(error => {
                console.error('Error fetching main levels count:', error);
            });

        // Fetch time trial count
        axios.get('http://localhost/api/time-trials/count')
            .then(response => {
                setTimeTrialCount(response.data.level_count);
            })
            .catch(error => {
                console.error('Error fetching time trial count:', error);
            });
    }, []);


    return (
        <PageWithHeader>
            <div className="flex flex-col">
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden justify-between"
                    style={{backgroundImage: 'url("/img/levels-bg/main-levels.jpg")'}}
                    to="main"
                >
                    <div>Main Levels</div>
                    <div>0/{mainLevelsCount}</div>

                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30 hover:opacity-0 transition duration-500"></div>
                </Link>
                <Link
                    className="w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden justify-between"
                    style={{backgroundImage: 'url("/img/levels-bg/time-trial.jpg")'}}
                    to="time-trial"
                >
                    <div>Time Trial</div>
                    <div>0/{timeTrialCount}</div>

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
                <button
                    className="cursor-not-allowed w-[320px] md:w-[700px] sm:w-[500px] h-[80px] rounded-lg p-4 flex justify-between items-center my-5 drop-shadow-lg bg-cover bg-center text-white font-semibold text-xl relative overflow-hidden transition duration-300"
                    style={{backgroundImage: 'url("/img/levels-bg/multiplayer.jpg")'}}
                    disabled
                >
                    <div className="line-through decoration-2" >Multiplayer</div>
                    <div className="uppercase text-[#ff0000]">Coming Soon...</div>
                    <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30"></div>
                </button>
            </div>
        </PageWithHeader>
    );
};

export default Levels;