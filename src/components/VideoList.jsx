import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  //props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoID} video={video}/>
  })
  return <div className='ui relaxed divided list' >{renderedList}</div>
}