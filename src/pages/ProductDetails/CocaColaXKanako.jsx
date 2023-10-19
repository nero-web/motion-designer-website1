import React, { useEffect } from "react";
import bg_about from "../ProductDetails/assets/Projects-bg.jpg";
import Navbar from "../../components/Navbar";
import img1 from "../ProductDetails/assets/CocaColaXKanako/img1.jpeg";
import img2 from "../ProductDetails/assets/CocaColaXKanako/img2.jpg";
import img3 from "../ProductDetails/assets/CocaColaXKanako/img3.jpeg";
import img4 from "../ProductDetails/assets/CocaColaXKanako/img4.jpeg";
import v1 from "../ProductDetails/assets/CocaColaXKanako/v1.mp4";
import logofl from "../ProductDetails/assets/08AC2B4C-ED91-41DD-BD0C-24D31259E835.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CocaColaXKanako = () => {
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
            <h1 className='pt-0 pb-[0.5em] projecttitle'>Coca Cola X Kanako</h1>
          </div>
          <div>
            <p className='description_projets text-center static lg:px-[12em] md:px-[8em] sm:px-[4em] xsm:px-[2em]'>
            Coca-Cola s'unit à Kanako. Une collaboration féerique, où les couleurs s'entremêlent et les rêves s'éveillent.
            </p>
          </div>
        </div>
        <div className='work_listpmd work_listpxsm'>
          <div className='work_item col-span-2 row-span-2'>
            <video
              src={v1}
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted></video>
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
          <div className='work_item col-span-2 row-span-2'>
            <img src={img4} alt='' className='w-full h-full' />
          </div>
        </div>
        <div className='div-block-187'>
          <div className="mt-10">
            <h2 className='heading-53'>ROLE & SERVICES</h2>
            <div>
              <p className='paragraph-10'>
                MOTION&nbsp;DESIGN / ANIMATION 2D / ART&nbsp;DIRECTION
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h2 className='heading-53 mt-3'>Agence</h2>
            <div className='flex justify-center items-center'>
              <a href='https://malherbe.paris' className='link-17'>
                Malherbe Design
              </a>
            </div>
          </div>
          <div className='main-works bg-cover relative'>
            <Link to={"/diorpackstage"}>
            <img
              src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd1d67c1cb95256bd305_5e258df9b2b6454d2e14fc2c_Dior_Backstage_direction_artistique.webp'
              alt=''
              className='object-cover w-full h-full absolute imghover'
            />
            <div className='page-nextdiv absolute text-white'>
              <p className='chapters-next_p'>PROJECT SUIVANT</p>
              <div className='chapters-next_title-wrap'>
                <h4 className='chapters-next_title'>Dior packstage</h4>
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
              <Link to={"/diorpackstage"}>
              <div className='col-span-1 work_itempro relative cursor-pointer'>
                <img
                  src='https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd1d67c1cb95256bd305_5e258df9b2b6454d2e14fc2c_Dior_Backstage_direction_artistique.webp'
                  alt=''
                  className='w-full h-full object-cover absolute'
                />
                <div className='w-full h-full bg-transparent absolute'>
                  <h2 className='heading-55'>Dior packstage</h2>
                </div>
              </div>
              </Link>
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
            </div>
            <Footer pr={"0"} pl={"0"} pbt={"0"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocaColaXKanako;