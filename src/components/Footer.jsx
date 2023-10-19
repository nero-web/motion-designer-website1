/** @format */

import React from "react";

const Footer = ({ pl, pr, pbt }) => {
  return (
    <div className='mt-20'
    style = {{ paddingLeft : pl, paddingRight: pr, paddingBottom: pbt}}
    >
      <div className='pt-0 mt-[60px] mb-0 h-[auto] min-h-[auto]'>
        <div className='w-full h-auto min-h-[auto] flex justify-center'>
          <h1 className='fhlg fhmd fhxsm flex justify-center'>El Masrour</h1>
        </div>
        <div className='lg:px-24 md:px-20 sm:px-5 pt-5'>
          <div className='w-full max-w-screen-xl min-h-20 mx-auto px-10'>
            <div className='flex justify-between items-center foot-col'>
              <div className='text-center'>
                © Copyright 2023 EL MASROUR LLC.
              </div>
              <div className='gap-x-4 gap-y-4 items-center flex'>
                <a
                  href='https://twitter.com/SaadElmasrour'
                  className='max-w-full inline-block'>
                  <img
                    src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352bdf95c54ec9011141a9_instagram-167-svgrepo-com.svg'
                    loading='lazy'
                    alt=''
                    className='h-7 max-w-full align-middle inline-block'
                  />
                </a>
                <a
                  href='https://twitter.com/SaadElmasrour'
                  className='max-w-full inline-block'>
                  <img
                    src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352c33ac4abe14016630b6_facebook-svgrepo-com%20(1)-cropped.svg'
                    loading='lazy'
                    alt=''
                    className='h-7 max-w-full align-middle inline-block'
                  />
                </a>
                <a
                  href='https://twitter.com/SaadElmasrour'
                  className='max-w-full inline-block'>
                  <img
                    src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352c3a04fc23ec267ce6e4_youtube-168-svgrepo-com.svg'
                    loading='lazy'
                    alt=''
                    className='h-7 max-w-full align-middle inline-block'
                  />
                </a>
                <a
                  href='https://twitter.com/SaadElmasrour'
                  className='max-w-full inline-block'>
                  <img
                    src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64353920be80c3391f787b74_patreon_black_logo_icon_147098.png'
                    loading='lazy'
                    alt=''
                    className='h-7 max-w-full align-middle inline-block'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
