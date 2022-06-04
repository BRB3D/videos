import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  //props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem />
  })
  return <div>{renderedList}</div>
}