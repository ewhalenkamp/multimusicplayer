import React from 'react';
import YouTube from 'react-youtube';

  export default class MediaPlayer extends React.Component {
      //onReady changes App's player state, which stores the video player that can be manually controlled
    _onReady = event => {
        
        this.props.changeVideoPlayer(event.target);
        
    }

    render() {
      const opts = {
        height: '500',
        width: '500',
      };
  
      return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
    }
  
    
  }