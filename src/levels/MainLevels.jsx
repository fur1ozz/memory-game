import React from 'react';
import PageWithHeader from "../utils/PageWithHeader";
import SingleLevelSquare from "./SingleLevelSquare";

const MainLevels = () => {
    return (
        <PageWithHeader>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl">Main Levels</h1>
                <div className="flex flex-wrap max-w-3xl justify-center">
                    <SingleLevelSquare level="1" star1={true} star2={true} star3={true} unlocked={true} />
                    <SingleLevelSquare level="2" star1={true} star2={true} star3={false} unlocked={false}/>
                    <SingleLevelSquare level="3" star1={true} star2={true} star3={false} />
                    <SingleLevelSquare level="4" star1={true} star2={false} star3={false} />
                    <SingleLevelSquare level="5" />
                    <SingleLevelSquare level="6" />
                    <SingleLevelSquare level="7" />
                    <SingleLevelSquare level="8" />
                    <SingleLevelSquare level="9" />
                    <SingleLevelSquare level="10" />
                    <SingleLevelSquare level="11" />
                    <SingleLevelSquare level="12" />
                </div>
            </div>
        </PageWithHeader>
    );
};

export default MainLevels;