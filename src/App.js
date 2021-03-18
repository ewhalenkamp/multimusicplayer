
import './App.css';
import SearchSection from './components/SearchSection.js';
import SpotifySection from './components/SpotifySection.js';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: -1,
      queue: [],
      data: [
        { id: "1", name: "Youtube" , component: <SearchSection/>},
        { id: "2", name: "Spotify"  , component: <SpotifySection/>},
      ]
    };
  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(currentTab) {
    this.setState({ currentTab });
  }

  addQueue = video => {
    this.state.queue.push(video);
  }
    
  render() {
    return (

<>
  <div className="tab">
  {this.state.data.map((button, i) => (
    <button key={button.name} className="tablinks" onClick={() => this.handleClick(i)}>{button.name}</button>
  ))
  }
  </div>

  <div className="tabcontent">
    {this.state.currentTab !== -1 &&
      <React.Fragment>
        {this.state.data[this.state.currentTab].component}
      </React.Fragment>
    }
  </div>
</>
  )
  }
}

