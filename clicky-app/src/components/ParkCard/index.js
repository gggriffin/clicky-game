import React from 'react';
import './style.css';

function ParkCard(props) {
    return (
        <div className="card m-2 ml-3 mr-5 col-12 col-md-3 float-right">
            <button className="parkBtn" onClick={props.currentIncrement}>
                <div className="img-fluid mt-2 text-center">
                    <img className="img" alt={props.name} src={props.image} key={props.id}/>
                </div>
                <div className="content text-center mt-2 mb-1">
                    <h5 className="align-top">{props.name}</h5>
                </div>
            </button>
        </div>
    );
}

export default ParkCard;