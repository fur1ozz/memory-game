import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseLevelData = (timeTrial, level) => {
    const [choiceCount, setChoiceCount] = useState(0);
    const [matchCount, setMatchCount] = useState(0);

    useEffect(() => {
        const fetchLevelData = async () => {
            try {
                const response = await axios.get(`http://localhost/api/${timeTrial ? 'time-trials' : 'main-levels'}/${level}`);
                const { choiceCount: fetchedChoiceCount, matchCount: fetchedMatchCount } = response.data.level;
                setChoiceCount(fetchedChoiceCount);
                setMatchCount(fetchedMatchCount);
            } catch (error) {
                console.error('Error fetching level data:', error);
            }
        };

        fetchLevelData();
    }, [level, timeTrial]);

    return { choiceCount, matchCount };
};

export default UseLevelData;
