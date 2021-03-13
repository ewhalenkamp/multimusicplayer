import React from 'react';

function VideoResult(props) {
    const {title, channelTitle} = props.video.snippet;
    const thumbnail = props.video.snippet.thumbnails.default;
    return(
        <div className="videoresult">
            <h2>{title}</h2>
            <p>{channelTitle}</p>
            <img src={thumbnail.url} alt={title}/>
        </div>
    );
}

export default VideoResult;