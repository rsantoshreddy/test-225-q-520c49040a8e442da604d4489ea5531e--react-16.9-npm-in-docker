import React from 'react';

const Video = ({ src, width = '320', height = '240', type = 'video/mp4' }) => {
  return (
    <video width={width} height={height} controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
