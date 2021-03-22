import React from 'react';
import VideoResult from './VideoResult.js';

export default function QueueSection(props) {
    const compileQueue = () => {
        const queueresults = [];
        for (var i=props.queue.length-1;i>0;i--) {
            queueresults.push(<VideoResult key={i} video={props.queue[i]} removeQueue={props.removeQueue}/>)
        }
        return queueresults;
    }
    return(
        <div className="queuesectionwrapper">
            {compileQueue()}
        </div>
        );
}