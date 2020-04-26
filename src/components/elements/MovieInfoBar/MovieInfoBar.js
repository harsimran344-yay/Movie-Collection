import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime } from '../../../helpers';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
    return (
        <div>
           <div className="rmdb-movieinfobar">
                <div className="rmdb-infobar-content">
                    <div className="rmdb-movieinfobar-col"
                    >
                        <FontAwesome className="fa-time" name="clock-o" size="2x" />
                        <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default MovieInfoBar;