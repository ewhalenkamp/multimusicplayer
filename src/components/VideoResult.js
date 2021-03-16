import React from 'react';
import './component.css';

export default class VideoResult extends React.Component {
    video = this.props.video;
    title = this.video.snippet.title;
    channelTitle = this.video.snippet.channelTitle;
    thumbnail = this.video.snippet.thumbnails.high;

    buttonClick = (event) => {
        event.preventDefault();
        this.props.addQueue(this.video);
    }

    render() {
        return(
            
            <div className="videoresult">
                <img src={this.thumbnail.url} alt={this.title}/>
                <p><b>{this.title}</b></p>
                <div className="author-queuebutton">
                    <p>{this.channelTitle} </p>
                    <button onClick={this.buttonClick}>Add to Queue</button>
                </div>
                
            </div>
        );
    }
}