import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageWithHeader from "../utils/PageWithHeader";
import SingleLevelSquare from "./SingleLevelSquare";

const MainAndTimeLevels = ({ type }) => {
    const [levelIds, setLevelIds] = useState([]);

    useEffect(() => {
        const endpoint = type === 'main' ? 'main-levels' : 'time-trials';

        axios.get(`http://localhost/api/${endpoint}/level-ids`)
            .then(response => {
                setLevelIds(response.data.level_ids);
            })
            .catch(error => {
                console.error('Error fetching level IDs:', error);
            });
    }, []);
    return (
        <PageWithHeader>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl">
                    {type === 'main' ? 'Main Levels' : 'Time Trials'}
                </h1>
                <div className="flex flex-wrap max-w-3xl justify-center mt-5">
                    {levelIds.map((levelId, index) => (
                        <SingleLevelSquare
                            key={index}
                            level={levelId.toString()}
                            star1={false}
                            star2={false}
                            star3={false}
                            unlocked={index === 0}
                        />
                    ))}
                </div>
            </div>
        </PageWithHeader>
    );
};

export default MainAndTimeLevels;