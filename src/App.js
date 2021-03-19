
import './App.css';
import Search from './components/Search.js';
import MediaPlayer from './components/MediaPlayer.js'
import React from 'react';
import ReactYT from 'react-youtube';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      pause: true,
      player: ReactYT.Player
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return;
  }

  addQueue = video => {
    const queue = this.state.queue;
    queue.push(video);
    this.setState({queue: queue});

  }

  onPlayPause = () => {
    const pause = !this.state.pause;
    
    if (pause) 
      this.state.player.pauseVideo();
    else 
      this.state.player.playVideo();
      
    this.setState({pause});
    console.log(this.state.player);
  }
    
  render() {
    var id = "0";
    if (this.state.queue[0])
      id = this.state.queue[0].id.videoId;
    return (
      <>
        <Search addQueue={this.addQueue}/>
        <MediaPlayer videoId={id} changeVideoPlayer={(player) => {this.setState({player});}}/>
        <button onClick = {this.onPlayPause}>{this.state.pause ? 'Play' : 'Pause'}</button>
        </>
    );
  }
}

