import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from 'SearchBar';
import VideoList from 'VideoList';
import VideoDetail from 'VideoDetail';

const API_KEY = 'AIzaSyBIRoFoz-4oJuhA9Nmpr3om7JMAh9wI91A';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => { 
          console.log("selected video:")
          console.log(selectedVideo);
          this.setState({selectedVideo}) }}
          videos={this.state.videos}
          />
      </div>  
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
