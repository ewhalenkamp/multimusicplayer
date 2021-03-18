import React from 'react';
import './component.css';
import VideoResult from './VideoResult.js';

export default function VideoResultList(props) {
    const videos = props.videos;
    const addQueue = props.addQueue;
    
    //compiles multiple VideoResult components into an array to be displayed within render()
    const compileResults = () => {
        const searchresults = [];
        videos.forEach((vid) => {searchresults.push(<VideoResult video={vid} addQueue={addQueue}/>)});
        console.log(videos);
        return searchresults;
      }

    return(
        
        <div className="videoresult">
            {compileResults()}
            
        </div>
    );
    
}