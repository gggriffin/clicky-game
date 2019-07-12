import React from 'react';

function Score(props) {
        return (
            <div className="col-8 offset-2 mt-3 mb-3 score-bar p-3 score-bar">
                <h5 className="score-total float-right">High Score: {props.highScore}</h5>
                <h5 className="score-total">Current Score: {props.currentScore}</h5>
            </div>
        )
    }


export default Score;