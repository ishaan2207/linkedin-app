import React from "react";
import './TrendingNow.css';

import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function TrendingNow() {
    const trendingTopics = [
        {
            title: 'Salary trends at Indian GCCs',
            time: '5h ago',
            readers: 1909
        },
        {
            title: 'VC trends',
            time: '5h ago',
            readers: 617
        },
        {
            title: 'Sustainable investments',
            time: '5h ago',
            readers: 484
        },
        {
            title: 'India\'s tech sector',
            time: '5h ago',
            readers: 424
        },
        {
            title: 'India\'s aviation industry',
            time: '5h ago',
            readers: 331
        }
    ];

    const todaysPuzzles = [
        {
            source: 'https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6',
            title: 'Tango',
            description: 'Harmonize the grid'
        },
        {
            source: 'https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1',
            title: 'Queens',
            description: 'Crown each region'
        },
        {
            source: 'https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph',
            title: 'Pinpoint',
            description: 'Guess the category'
        },
        {
            source: 'https://static.licdn.com/aero-v1/sc/h/8ilyk40nkjoeuzohmqsoc6iiv',
            title: 'Crossclimb',
            description: 'Unlock a trivia ladder'
        }
    ]

    return (
        <div className="trendingSectionContainer">
            <div className="trendingSectionHeader">
                <p id="trendingHeader">Trending Now</p>
                <p id="trendingTag">curated by LinkedIn News</p>
            </div>
            <div className="trendingTopics">
                {trendingTopics.map((trendingTopic) => (
                    <div className="topicsContainer">
                        <p>{trendingTopic.title}</p>
                        <div className="topicInfo">
                            <p>{trendingTopic.time}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', padding: '0 5px' }} />
                            <p>{trendingTopic.readers} readers</p>
                        </div>
                    </div>
                ))}
                <div className="showMoreContainer">
                    <p>Show More</p>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className="todaysPuzzles">
                <p>Today's puzzles</p>
                <div className="invidualPuzzles">
                    {todaysPuzzles.map(todaysPuzzle => (
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