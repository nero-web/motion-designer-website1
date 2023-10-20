/** @format */

import React from "react";
import Navbar from "./Navbar";
import heroBg from "../assets/hero-bg.mp4";
import Show from "../assets/Show.png";

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[100vh] relative'>
        <video className='video-class' src={heroBg} autoPlay loop muted autostart playsInline disablePictureInPicture></video>
        <Navbar textColor={"white"} className='top-0 left-0' NavPosition={"fixed"}/>
        <div className='fi-flex bottom-0 image-center fixed'>
          <div className='fabien-art fabien-hide'>
            <h1 className='text-white big-fabien font-light text-9xl'>
              El Masrour
            </h1>
            <div className='text-white text-4xl font-normal'>
              Independant Art Director & Motion Designer / Paris
            </div>
          </div>
          <div className='min-w-[192px] min-h-[192px] max-w-[192px] max-h-[192px] me-10 image-margin'>
            <img
              src={Show}
              alt=''
              className='w-full h-full App-logo justify-center items-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
