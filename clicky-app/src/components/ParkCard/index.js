import React, {Component} from 'react';
import './style.css';

class ParkCard extends Component {
    constructor(props) {
        super(props)
        this.state = {beenclicked: false}
    }

    flagCard () {
        if (this.state.beenclicked === false) {
            this.setState({beenclicked: true});
            this.props.currentIncrement();
            this.props.scoreCheck();
        } else {
            this.props.trueCheck();
          }
    }

    render() {
    return (
        <div className="card m-2 ml-3 mr-5 col-12 col-md-3 float-right">
            <button className="parkBtn" onClick={() => this.flagCard()}>
                <div className="img-fluid mt-2 text-center">
                    <img className="img" alt={this.props.name} src={this.props.image} key={this.props.id} beenclicked={this.props.beenclicked}/>
                </div>
                <div className="content text-center mt-2 mb-1">
                    <h5 className="align-top">{this.props.name}</h5>
                </div>
            </button>
        </div>
    );
}
}

export default ParkCard;