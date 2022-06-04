import React from 'react';
import './VideoItem.css'

const VideoItem = ({video}) => {
  console.log(video);
  // video.snippet.title
  // video.snippet.thumbnails
  return <div className='item video-item' > 
    <img className='ui image' src={video.snippet.thumbnails.medium.url} />
    <div className='content'>
      <div className='header'>{video.snippet.title}</div>
    </div>
    </div>
}

export default VideoItem;