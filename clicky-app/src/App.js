import React, { Component } from 'react';
import ParkCard from './components/ParkCard'
import parks from './parks.json'
import Wrapper from './components/Wrapper'
import Score from './components/Score'
import './App.css';
import shuffle from 'shuffle-array'
class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    parks
  };


  currentIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  highIncrement = () => {
    this.setState({ highScore: this.state.highScore + 1 });
  };


  render() {
    shuffle(parks);



    return (
      <div className="container background p-0 m-0 col-12">

        <div className="row text-center">
          <h1 className="col-8 offset-2 mt-5">Park Pick</h1>
          <h4 className="col-10 offset-1 mt-3">Click on a park to earn points, but don't click on it more than once.</h4>
        </div>
        <Score currentScore={this.state.currentScore}
                highScore={this.state.highScore}/>
        <div className="row">
          <div className="content col-8 offset-2 mb-5 py-3">
            <Wrapper>
              {parks.map(park => (
                <ParkCard
                  key={park.id}
                  image={park.image}
                  name={park.name}
                  currentIncrement={this.currentIncrement}
                  highIncrement={this.highIncrement}
                />
              ))}
            </Wrapper>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
