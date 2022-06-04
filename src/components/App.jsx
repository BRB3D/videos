import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail'


class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null 
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount() {
    this.onTermSubmit('Tenacioud D')
  }

  render() {
    return (
      <div className='ui container' >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid' >
          <div className="ui row" >
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <divl className='five wide column' >
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </divl>
          </div>
        </div>
      </div>
    );
  };
}

export default App;