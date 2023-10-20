/** @format */

import React, { useEffect } from "react";
import bg_about from "../ProductDetails/assets/Projects-bg.jpg";
import Navbar from "../../components/Navbar";
import img1 from "../ProductDetails/assets/Diorpackstage/img1.jpg";
import img2 from "../ProductDetails/assets/Diorpackstage/img2.jpg";
import img3 from "../ProductDetails/assets/Diorpackstage/img3.jpg";
import v1 from "../ProductDetails/assets/Diorpackstage/v1.mp4";
import logofl from "../ProductDetails/assets/08AC2B4C-ED91-41DD-BD0C-24D31259E835.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Diorpackstage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className='w-full h-auto pb-0'
      style={{ backgroundImage: `url(${bg_about})` }}>
      <Navbar />
      <div className='mx-auto px-[1em] pt-0'>
        <div className='mt-[60px]'>
          <div className='pt-[4em]'>
            <h1 className='pt-0 pb-[0.5em] projecttitle'>Dior Backstage</h1>
          </div>
          <div>
            <p className='description_projets text-center static lg:px-[12em] md:px-[8em] sm:px-[4em] xsm:px-[2em]'>
              Plongez dans un univers envoûtant où l'art de l'animation
              rencontre l'univers de la mode, l'opportunité d'exprimer en
              mouvement, un vibrant hommage cette marque iconique.
            </p>
          </div>
        </div>
        <div className='work_listpmd work_listpxsm'>
          <div className='work_item col-span-2 row-span-2 bgdiv7'>
            <video
              src={v1}
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              autostart
              playsInline
              disablePictureInPicture></video>
          </div>
          <div className='work_item md:col-span-1 xsm:col-span-2'>
            <img src={img1} alt='' className='work_imagee' />
          </div>
          <div className='work_item md:col-span-1 xsm:col-span-2'>
            <img src={img2} alt='' className='work_imagee' />
          </div>
          <div className='work_item col-span-2 row-span-2'>
            <img src={img3} alt='' className='w-full h-full' />
          </div>
        </div>
        <div className='div-block-187'>
          <div className='mt-10'>
            <h2 className='heading-53'>ROLE & SERVICES</h2>
            <div>
              <p className='paragraph-10'>
                MOTION&nbsp;DESIGN / ANIMATION 2D / ART&nbsp;DIRECTION
              </p>
            </div>
          </div>
          <div className='mb-10'>
            <h2 className='heading-53 mt-3'>Agence</h2>
            <div className='flex justify-center items-center'>
              <a href='https://malherbe.paris' className='link-17'>
                Malherbe Design
              </a>
            </div>
          </div>
          <div className='main-works bg-cover relative'>
            <Link to={"/diorsnow"}>
              <img
                src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd08a9718805eacae8d3_5e258dde5cbbd610bb282d87_Dior_Snow_Cushion_Direction_Artistique.webp'
                alt=''
                className='object-cover w-full h-full absolute imghover'
              />
              <div className='page-nextdiv absolute text-white'>
                <p className='chapters-next_p'>PROJECT SUIVANT</p>
                <div className='chapters-next_title-wrap'>
                  <h4 className='chapters-next_title'>Dior Snow</h4>
                  <div className='next_icon next_iconsm'>
                    <img className='w-full h-full' src={logofl} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='w-full h-full'>
            <div>
              <h2 className='heading-54 text-black mb-10'>MORE</h2>
            </div>
            <div className='work_listpro'>
              <Link to={"/diorsnow"}>
                <div className='col-span-1 work_itempro relative cursor-pointer'>
                  <img
                    src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd08a9718805eacae8d3_5e258dde5cbbd610bb282d87_Dior_Snow_Cushion_Direction_Artistique.webp'
                    alt=''
                    className='w-full h-full object-cover absolute bg-cover'
                  />
                  <div className='w-full h-full bg-transparent absolute'>
                    <h2 className='heading-55'>Dior Snow</h2>
                  </div>
                </div>
              </Link>
              <Link to={"/yvessaintlaurent"}>
                <div className='col-span-1 work_itempro relative cursor-pointer'>
                  <img
                    src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc7bfacc755c5e762d54_5e258d9d9b89b67620482b48_Yves_Saint_Laurent_Spring_Look_2017_The-Street_and_I_Collection_LIPS.webp'
                    alt=''
                    className='w-full h-full object-cover absolute'
                  />
                  <div className='w-full h-full bg-transparent absolute'>
                    <h2 className='heading-55'>Yves Saint Laurent</h2>
                  </div>
                </div>
              </Link>
              <Link to={"/gayelordhausertv"}>
                <div className='col-span-1 work_itempro relative cursor-pointer'>
                  <img
                    src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc9d6a8497d80ed407bb_5e258d625cbbd62ee9282a2a_Gayelord_Hauser_Publicite%CC%81_TV_2015.webp'
                    alt=''
                    className='w-full h-full object-cover absolute'
                  />
                  <div className='w-full h-full bg-transparent absolute'>
                    <h2 className='heading-55'>Gayelord Hauser / TV</h2>
                  </div>
                </div>
              </Link>
            </div>
            <Footer pr={"0"} pl={"0"} pbt={"0"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diorpackstage;
