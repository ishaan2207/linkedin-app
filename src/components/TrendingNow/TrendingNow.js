// dpes
import React, { useEffect, useState } from "react";

// styles
import './TrendingNow.css';

// components
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// constants
import { TODAYS_PUZZLES } from "../../constants/mocks/Home/homeTrendingNow";
import { TRENDING_NOW } from "../../constants/texts/Home/homeTrendingNow";

// apis
import { fetchTrendingNow } from "../../utils/apis/home";

function TrendingNow() {
    const [trendingNow, setTrendingNow] = useState([]);
    const [viewableTopics, setViewableTopics] = useState(5);

    const handleShowMore = () => {
        if (viewableTopics === 5) {
            setViewableTopics(10);
        } else {
            setViewableTopics(5);
        }
    }

    useEffect(() => {
        fetchTrendingNow().then(data => setTrendingNow(data));
    }, [])

    return (
        <div className="trendingSectionContainer">
            <div className="trendingSectionHeader">
                <p id="trendingHeader">{TRENDING_NOW.HEADER}</p>
                <p id="trendingTag">{TRENDING_NOW.CURATED}</p>
            </div>
            <div className="trendingTopics">
                {trendingNow.slice(0, viewableTopics).map((trendingTopic, key) => (

                    <div className="topicsContainer" key={key}>
                        <p>{trendingTopic.title}</p>
                        <div className="topicInfo">
                            <p>{trendingTopic.createdAt}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', padding: '0 5px' }} />
                            <p>{trendingTopic.readers} readers</p>
                        </div>
                    </div>
                ))}
                <div className="showMoreContainer">
                    <p onClick={handleShowMore}>{viewableTopics === 5 ? 'Show more' : 'Show less'}</p>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className="todaysPuzzles">
                <p>{TRENDING_NOW.PUZZLES}</p>
                <div className="invidualPuzzles">
                    {TODAYS_PUZZLES.map(todaysPuzzle => (
                        <div className="individualPuzzlesContainer">
                            <img src={todaysPuzzle.source} alt='' />
                            <div className="puzzleDescription">
                                <p className="puzzleTitle">{todaysPuzzle.title}</p>
                                <p className="puzzleInformation">{todaysPuzzle.description}</p>
                            </div>
                            <KeyboardArrowRightIcon style={{ marginLeft: 'auto' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingNow;