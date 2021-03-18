import React from 'react';
import './component.css';

export default function VideoResult(props) {

    console.log(props);
    
    const video = props.video;
    const title = video.snippet.title;
    const channelTitle = video.snippet.channelTitle;
    const thumbnail = video.snippet.thumbnails.high;
    

    const buttonClick = (event) => {
        event.preventDefault();
        this.props.addQueue(this.video);
    }
    
    return(
        <>
            <img src={thumbnail.url} alt={title}></img>
            <p><b>{title}</b></p>
            <div className="author-queuebutton">
                <p>{channelTitle} </p>
                <button onClick={buttonClick}>Add to Queue</button>
            </div>
        </>
    );
}