import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


function VideoCards ({ videoSrc, imgSrc, prodactName, too }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const playPromise = useRef(null);
  
    const handleMouseEnter = () => {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
        playPromise.current = videoRef.current.load();
        playPromise.current = videoRef.current.play();
        playPromise.current.then(() => {
          // Video successfully started playing
        }).catch(error => {
          // Handle play error, if any
        });
      }
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      if (!videoRef.current) return;
      if (playPromise.current !== null) {
        playPromise.current.then(() => {
          videoRef.current.pause();
        }).catch(error => {
          // Handle pause error, if any
        });
      } else {
        videoRef.current.pause();
      }
      setIsHovered(false);
    };

  return (
    <div className='min-w-auto card max-h-[380px] min-h-[300px] h-auto rounded-[14px] relative bg-transparent'>
      <Link to={too}>
      <div className='h-[80%] relative mb-4 bg-transparent rounded-[14px] w-full'>
        <div
          className={`absolute top-0 left-0 right-0 w-full h-full object-cover rounded-[14px]`}
          style={{
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <img src={imgSrc} alt='' className='w-full h-full rounded-[14px] object-contain' />
        </div>
        <div
          className='absolute top-0 left-0 right-0 w-full h-full object-contain rounded-[14px]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <video
            className='w-full h-full object-contain rounded-[14px]'
            src={videoSrc}
            ref={videoRef}
            autoPlay={isHovered}
            loop={isHovered}
            muted={true}
            alt=''
          />
        </div>
      </div></Link>
      <div className='px-4 font-semibold tracking-wide w-full text-center flex flex-row cursor-pointer text-black justify-center object-contain bg-transparent text-xl'>
        <p>{prodactName}</p>
      </div>
    </div>
  );
};

export default VideoCards;