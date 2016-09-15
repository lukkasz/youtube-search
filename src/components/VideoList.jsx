import React from 'react';
import VideoListItem from 'VideoListItem';


const VideoList = (props) => {
  const videoListItem = props.videos.map( (video) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect} 
      />)
  });
  
  return (
    <ul className="col-md-4 list-group">
     {videoListItem}
    </ul>  
  );
}

export default VideoList;