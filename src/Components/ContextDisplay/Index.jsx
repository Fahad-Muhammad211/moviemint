import React from 'react';
import './ContextDisplay.css';

const Box = () => {
  return;
};

const VideoSection = () => {
  return (
    <div>
      <h6 className='h6-nft'>NFT CAPITAL RAISED</h6>
      <div className='d-flex justify-content-center'>
        <h6 className='btn-us'>US $114.74012</h6>
      </div>
      <div className=''>
        <video controls autoPlay loop muted className="w-full" style={{ height: '', width: '400px' }}>
          <source
            src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className='d-flex justify-content-center'>
          <button className='btn-explore m-2'>Explore Projects</button>
          <button className='btn-explore m-2'>Become a Partner</button>
        </div>
      </div>
    </div>
  );
};

const ContextDisplay = () => {
  return (
    <div className="md:max-w-md">
      <div className="flex justify-center"></div>
      <VideoSection />
    </div>
  );
};

export default ContextDisplay;
