import Search from './Search.js';
import React from 'react';
import VideoResult from './VideoResult.js';


export default function SearchSection(props) {
  const searchResults = props.searchResults;
  const addQueue = props.addQueue;
  
  //compiles multiple VideoResult components into an array to be displayed within render()
  const compileResults = () => {
      const searchresults = searchResults.map((vid, index) => <VideoResult className={"column"+((index%2).toString())} video={vid} addQueue={addQueue}/>);
      return searchresults;
    }

  return(
      
      <div className="searchSection">
          {compileResults()}
          
      </div>
  );
  
}