import React from 'react';
import YouTube from 'react-youtube';

  export default class MediaPlayer extends React.Component {
      //onReady changes App's player state, which stores the video player that can be manually controlled
    _onReady = event => {
        
        this.props.changeVideoPlayer(event.target);
        
    }

    render() {
      const opts = {
        height: '135',
        width: '250',
      };
  
      return (
      <div className="mediaplayer">
        <YouTube className="player" videoId={this.props.videoId} opts={opts} onReady={this._onReady} />
      </div>);
    }
  
    
  }