import React from "react";
import './NetworkGames.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NetworkGames() {
    const networkGames = [
        {
            image: 'https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAMf6E0TuucIkSYGFrDoCICokGw.png',
            title: 'Tango',
            num: '70',
            date: 'Monday, Dec 16'
        },
        {
            image: 'https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAInyIpJv34kES7qzS0STkOyrgw.png',
            title: 'Queens',
            num: '230',
            date: 'Monday, Dec 16'
        },
        {
            image: 'https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAGVaGbRJrmxWT-aZpUWJq_yroQ.png',
            title: 'Pinpoint',
            num: '230',
            date: 'Monday, Dec 16'
        },
        {
            image: 'https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAJi2zwcVtpjBQuipfPPLfXEkiQ.png',
            title: 'Crossclimb',
            num: '230',
            date: 'Monday, Dec 16'
        }
    ]

    return (
        <div className="networkGamesContainer">
            <div className="networkGamesHeader">
                <div>Stay in touch through daily games</div>
                <div className="networkGamesButtonsGroup">
                    <button className="gamesBackButton"><ArrowBackIosIcon style={{ height: '16px', width: '16px' }} /></button>
                    <button className="gamesForwardButton"><ArrowForwardIosIcon style={{ height: '16px', width: '16px' }} /></button>
                </div>
            </div>
        </div>
    )
}

export default NetworkGames;