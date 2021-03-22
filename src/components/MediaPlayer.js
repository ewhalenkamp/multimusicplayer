import React from 'react';
import YouTube from 'react-youtube';

  export default class MediaPlayer extends React.Component {
      //onReady changes App's player state, which stores the video player that can be manually controlled
    onReady = event => {
        
        this.props.changeVideoPlayer(event.target);
        
    }

    render() {
      const opts = {
        height: '135',
        width: '250',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      return (
      <div className="mediaplayer">
        <YouTube className="player" videoId={this.props.videoId} opts={opts} onEnd = {this.props.onVideoEnd} onReady={this.onReady} />
      </div>);
    }
  
    
  }