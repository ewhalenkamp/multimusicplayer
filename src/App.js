
import './App.css';
import SearchSection from './components/SearchSection.js';
import SpotifySection from './components/SpotifySection.js';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
    };
  }

  addQueue = video => {
    this.state.queue.push(video);
  }
    
  render() {
    return (
      <div className="search-wrapper">
        <SearchSection/>
      </div>
    );
  }
}

