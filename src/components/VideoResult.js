import React from 'react';
import './component.css';

export default function VideoResult(props) {
    
    const video = props.video;
    const title = video.snippet.title;
    const channelTitle = video.snippet.channelTitle;
    const thumbnail = video.snippet.thumbnails.high;

    const addQueue = (event) => {
        event.preventDefault();
        props.addQueue(video);
    }

    const removeQueue = (event) => {
        event.preventDefault();
        props.removeQueue(video);
    }
    
    const returnButton = () => {
        if (props.onRemove)
            return <button onClick={removeQueue}>Remove from Queue</button>
        else
            return <button onClick={addQueue}>Add to Queue</button>
    }

    return(
        <div className="videotile">
            <img src={thumbnail.url} alt={title}></img>
            
            <div className="videoinfo">
                
                <p ><b>{title}</b></p>
                <p>{channelTitle} </p>
                {returnButton()}
                
            </div>
        </div>
    );
}