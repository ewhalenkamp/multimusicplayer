import Search from './Search.js';
import VideoResultList from './VideoResultList.js';
import React from 'react';
import youtubeApi from '../apis/youtube.js'

export default class SearchSection extends React.Component {

    state = {
        videos: [],
    };

  addQueue = video => {
    this.props.addQueue(video);
  }

  onYTSearch = async keyword => {
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

  onSpotifySearch = () => {
    return;
  }

    render() {
        return(
        <div id="youtubesubsection" className="tabcontent">
            <Search onYTSearch={this.onYTSearch} onSpotifySearch={this.onSpotifySearch}/>
            {/* <VideoResultList videos={this.state.videos} addQueue={this.addQueue}/> */}
        </div>
      );
    }
}