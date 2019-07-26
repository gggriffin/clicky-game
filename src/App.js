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

    if (this.state.currentScore >= this.state.highScore) {
      this.state.highScore++;
    }
  };

  scoreCheck = () => {
    if(this.state.highScore === 12) {
      this.setState({ currentScore: this.state.currentScore = 0 });
    } 
  };

  trueCheck = () => {
    this.setState({
      data: this.resetGame(parks),
      currentScore: 0
    });
  };
    resetGame = parks => {
      const resetGame = parks.map(item => ({ ...item, beenclicked: false}));
      console.log('resetGame')
      return resetGame
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
                  scoreCheck={this.scoreCheck}
                  trueCheck={this.trueCheck}
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
