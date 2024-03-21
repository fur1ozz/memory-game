import React from 'react';
import PageWithHeader from "../utils/PageWithHeader";
import MemoryGameOrigin from "../components/MemoryGameOrigin";

const GamePage = () => {
    return (
        <PageWithHeader>
            <MemoryGameOrigin />
        </PageWithHeader>
    );
};

export default GamePage;