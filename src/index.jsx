import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//import SearchBar from 'SearchBar';
import Header from 'Header';
import VideoList from 'VideoList';
import VideoDetail from 'VideoDetail';

const API_KEY = 'AIzaSyBIRoFoz-4oJuhA9Nmpr3om7JMAh9wI91A';

//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
  }
  
  componentDidMount() {
    this.handleVideoSearch('javascript');
    this.debounceVideoSearch;
  }
  
  handleVideoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  handleVideoSelect = (selectedVideo) => {this.setState({ selectedVideo })}
  
  debounceVideoSearch =  _.debounce((term) => {this.handleVideoSearch(term)}, 500)
  
  
  render() {
    //const videoSearch = _.debounce((term) => {this.handleVideoSearch(term)}, 500);
    
    return (
      <div>
        <Header onVideoSearchChange={this.debounceVideoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
          />
      </div>  
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
