import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import VideoResult from './components/VideoResult.js';
import React from 'react';
import youtubeApi from './apis/youtube.js'


export default class App extends React.Component {

  state = {videos: [], queue: []};

  addQueue = video => {
    this.state.queue.push(video);
    console.log(video);
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("./search", {
      params: {
        part: 'snippet',
        q: keyword,
        type: 'video',
        maxResults: 50,
      }
    });
    const videos = [];
    response.data.items.forEach((item) => {videos.push(item);})
    this.setState({videos});
  }

  compileResults = () => {
    const searchresults = [];
    this.state.videos.forEach((vid) => {searchresults.push(<VideoResult video={vid} addQueue={this.addQueue}/>);})
    console.log(searchresults)
    return searchresults;
  }

  render() {
      return (
      <div className="App">
        <Search onSearch={this.onSearch}/>
        {this.compileResults()}
      </div>
      );
    }
}


