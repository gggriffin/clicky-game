import React, { Component } from 'react';
import logo from './logo.svg';
import ParkCard from './components/ParkCard'
import parks from "./parks.json"
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  state = {
    parks
  };

  render() {
  return (
    <div className="container background p-0 m-0 col-12">

      <div className="row text-center">
        <h1 className="col-8 offset-2 mt-5">Park Pick</h1>
        <h4 className="col-10 offset-1 mt-3">Click on a park to earn points, but don't click on it more than once.</h4>
      </div>

      <div className="row">
        <div className="content col-8 offset-2 mb-5 py-3">
          <Wrapper>
            {parks.map(park => (
              <ParkCard
                id={park.id}
                image={park.image}
                name={park.name}
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
