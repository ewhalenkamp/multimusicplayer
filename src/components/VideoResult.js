import React from 'react';

export default class VideoResult extends React.Component {
    video = this.props.video;
    title = this.video.snippet.title;
    channelTitle = this.video.snippet.channelTitle;
    thumbnail = this.video.snippet.thumbnails.default;

    buttonClick = (event) => {
        event.preventDefault();
        this.props.addQueue(this.video);
    }

    render() {
        return(
            <div className="videoresult">
                <h2>{this.title}</h2>
                <p>{this.channelTitle}</p>
                <button onClick={this.buttonClick}/>
                <img src={this.thumbnail.url} alt={this.title}/>
            </div>
        );
    }
}