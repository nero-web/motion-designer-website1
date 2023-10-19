/** @format */

import React, { useState, useRef} from "react";
import Profil from "./Profil";
import Footer from "./Footer";
import Projects_bg from "../assets/Projects-bg.jpg";
import VideoCards from "./VideoCards";
import V26 from "../assets/miprojects/Atelier Martell.mp4";
import V19 from "../assets/miprojects/Bourjois Paris.mp4";
import V22 from "../assets/miprojects/Cartier.mp4";
import V27 from "../assets/miprojects/Charlie Heidsieck Teaser.mp4";
import V11 from "../assets/miprojects/Chaumet - Whishes.mp4";
import V5 from "../assets/miprojects/Chopard - Red Carpet.mp4";
import V10 from "../assets/miprojects/Chopard Love.mp4";
import V6 from "../assets/miprojects/Coca Cola X Kanako.mp4";
import V32 from "../assets/miprojects/Coty.mp4";
import V1 from "../assets/miprojects/Dior Backstage.mp4";
import V20 from "../assets/miprojects/Dior Joy Makers.mp4";
import V2 from "../assets/miprojects/Dior Snow.mp4";
import V4 from "../assets/miprojects/Gayelord Hauser.mp4";
import V17 from "../assets/miprojects/Givenchy.mp4";
import V21 from "../assets/miprojects/Guerlain.mp4";
import V12 from "../assets/miprojects/LOréal Gold Obsession.mp4";
import V29 from "../assets/miprojects/LOréal Luxe.mp4";
import V16 from "../assets/miprojects/Lancôme.mp4";
import V31 from "../assets/miprojects/Martell Metavers.mp4";
import V30 from "../assets/miprojects/Nescens.mp4";
import V9 from "../assets/miprojects/Night Code.mp4";
import V8 from "../assets/miprojects/Nina Ricci x Harods.mp4";
import V13 from "../assets/miprojects/Nissan Leaf.mp4";
import V28 from "../assets/miprojects/Nuxe.mp4";
import V15 from "../assets/miprojects/Parti Pris.mp4";
import V7 from "../assets/miprojects/Playful Discovery.mp4";
import V24 from "../assets/miprojects/Poliakov.mp4";
import V18 from "../assets/miprojects/Remy Martin Instagram.mp4";
import V25 from "../assets/miprojects/Ruinart.mp4";
import V14 from "../assets/miprojects/Remy Martin Red Knight.mp4";
import V23 from "../assets/miprojects/YSL beauty.mp4";
import V3 from "../assets/miprojects/Yves Saint Laurent.mp4";
import { Link } from "react-router-dom";

const ProjectsGallery = () => {
  const [showVideos, setShowVideos] = useState(false);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);
  
  const handlePlayClick = () => {
    // When the "PLAY" div is clicked, toggle the play state.
    setIsPlaying(true);
      if (iframeRef.current) {
        // Autoplay the Vimeo iframe by sending a postMessage
        iframeRef.current.contentWindow.postMessage("play", "*");
      } 
  };

  return (
    <div
      className='w-full h-auto z-50 rounded-t-[16px] relative pb-10'
      style={{ backgroundImage: `url(${Projects_bg})` }}>
      <div className='w-full h-auto md:px-[140px] md:pt-[115px] xsm:px-0 xsm:pt-[71px]'>
        <div className='w-full h-full textsm-luxe textlg-luxe luxe-containe text-[#434343]'>
          <span className='mx-5'>Luxe</span>
          <span className='mx-5'>Art Direction</span>
          <span className='mx-5'>Fragrances&Beauty</span>
          <span className='mx-5'>Moodtape</span>
          <span className='mx-5'>Socials</span>
          <span className='mx-5'>3D Animatio</span>
          <span className='mx-5'>Typography</span>
        </div>
      </div>
      <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-v md:px-8 xsm:px-3 xsm:grid-cols-1'>
        <VideoCards
        videoSrc={V1}
        imgSrc={
          "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd1d67c1cb95256bd305_5e258df9b2b6454d2e14fc2c_Dior_Backstage_direction_artistique.webp"
        }
        prodactName={"Dior Backstage"}
        too= {"/diorpackstage"}/>
        <VideoCards
          videoSrc={V2}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd08a9718805eacae8d3_5e258dde5cbbd610bb282d87_Dior_Snow_Cushion_Direction_Artistique.webp"
          }
          prodactName={"Dior Snow"}
          too= {"/diorsnow"}/>
        <VideoCards
          videoSrc={V3}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc7bfacc755c5e762d54_5e258d9d9b89b67620482b48_Yves_Saint_Laurent_Spring_Look_2017_The-Street_and_I_Collection_LIPS.webp"
          }
          prodactName={"Yves Saint Laurent"}
          too={"/yvessaintlaurent"}
        />
        <VideoCards
          videoSrc={V4}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc9d6a8497d80ed407bb_5e258d625cbbd62ee9282a2a_Gayelord_Hauser_Publicite%CC%81_TV_2015.webp"
          }
          prodactName={"Gayelord Hauser / TV"}
          too={"/gayelordhausertv"}
        />
        <VideoCards
          videoSrc={V5}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/5fabe35e73389862bb0a2a4e_chopard_motion_design.jpg"
          }
          prodactName={"Chopard - Red Carpet"}
          too={"/chopardredcarpet"}
        />
        <VideoCards
          videoSrc={V6}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfccc4d7fbd741ab2246d5_5e258da8acccd17c8415d55c_Coca-Cola_X_Kanako.webp"
          }
          prodactName={"Coca Cola X Kanako"}
          too={"/cocacolaxkanako"}
        />
        <VideoCards
          videoSrc={V7}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd65934f0a2755cb372e_5fabe6c5f403a9738a9b3d4a_pradamoodtape.webp"
          }
          prodactName={"Prada / Playful Discovery"}
        />
        <VideoCards
          videoSrc={V8}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd76afe29b2df8c63712_5fabe6d5797a6a41bf80c970_nina_ricci_motiondesign.webp"
          }
          prodactName={"Nina Ricci x Harods"}
        />
        <VideoCards
          videoSrc={V9}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc89aeaccb53bcbb2f12_5e258d53acccd1c8f215d454_Belvedere_Night_Codes.webp"
          }
          prodactName={"Belvedere / Night Code"}
        />
        <VideoCards
          videoSrc={V10}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcce91406f7a5ffdabeab_5e258dcb9b89b6d396482c11_Chopard_Love_Motion_design.webp"
          }
          prodactName={"Chopard Love"}
        />
        <VideoCards
          videoSrc={V11}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd97d7fbd741ab23497d_5fabe516bc2f41ac3b1ef237_Chaumet_whishes_motion_design.webp"
          }
          prodactName={"Chaumet - Whishes"}
        />
        <VideoCards
          videoSrc={V12}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfccb391f803512b5862e8_5e258d732e290c03eadbeae9_LOreal_Gold_Obsession_Instagram_Motion_design_Paris.webp"
          }
          prodactName={"L'Oréal / Gold Obsession"}
        />
        <VideoCards
          videoSrc={V13}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfccd4c33536711050ea05_5e258db42e290ce30ddbf046_Nissan_3D_Motion-Design.webp"
          }
          prodactName={"Nissan Leaf"}
        />
        <VideoCards
          videoSrc={V14}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc5b39ee361011a554c5_5e258d8adbdfb6bc0784358e_Remy_Martin_Red_Knight_Motion_Design.webp"
          }
          prodactName={"Remy Martin / Red Knight"}
        />
        <VideoCards
          videoSrc={V15}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd3c77d242c996ef790b_5e328d8d51fd9e59ba61eedb_PartisPris-Paris_Motion_design_direction_artistique.webp"
          }
          prodactName={"Parti Pris"}
        />
        <VideoCards
          videoSrc={V16}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcda9a9718805eacbaaa4_5fabe50693973c1ef417af91_lancome_instagram.webp"
          }
          prodactName={"Lancôme"}
        />
        <VideoCards
          videoSrc={V17}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd572a5deee259786cf0_5fabe5d8a5124b509abf5c79_givenchy_moodtape.webp"
          }
          prodactName={"Givenchy"}
        />
        <VideoCards
          videoSrc={V18}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcc6bc791453caa4de01a_5e258dc0acccd14c0115d5a3_Remy_Martin_Instagram_Motion_Design.webp"
          }
          prodactName={"Remy Martin / Instagram"}
        />
        <VideoCards
          videoSrc={V19}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfccf94eba42c66a0603bc_5e258dd6acccd1c1ac15d66b_Bourjois-Paris_Motion_design.webp"
          }
          prodactName={"Bourjois Paris"}
        />
        <VideoCards
          videoSrc={V20}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd137519806dd655a3f4_5e258df1c1ca1daa0646ad63_Dior_Joy_Makers_2019.webp"
          }
          prodactName={"Dior Joy Makers"}
        />
        <VideoCards
          videoSrc={V21}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd2f4c0a0e3e4d5705d8_5e258e079b89b6ac01482f6f_Guerlain_Orchidee_Imperiale_Motion_design.webp"
          }
          prodactName={"Guerlain"}
        />
        <VideoCards
          videoSrc={V22}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcd4991f803512b591cbf_5e3430676902d637754ad8af_Cartier-milan-design-paris.webp"
          }
          prodactName={"Cartier"}
        />
        <VideoCards
          videoSrc={V23}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfced2facc755c5e792423_62e3bd2f75f9e03fa04b61ea_Yves-saint-laurent-beaute-motion-p-500.webp"
          }
          prodactName={"YSL beauty"}
        />
        <VideoCards
          videoSrc={V24}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64be6647948e00fd09e18abd_5e342a8e91dfef42b175557c_Poliakov-vodka-motion-design-paris-2020.webp"
          }
          prodactName={"Poliakov"}
        />
        <VideoCards
          videoSrc={V25}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/5e32f6727e714ce34b2d3d37_Ruinart-x-hubert-le-gall.jpg"
          }
          prodactName={"Ruinart"}
        />
        <VideoCards
          videoSrc={V26}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64bfcdb5ed1b82f490a9d734_600ab5e3432250345750c348_atelier-martell-motion-design-moodtapes-freelance-min.webp"
          }
          prodactName={"Atelier Martell"}
        />
        <VideoCards
          videoSrc={V27}
          imgSrc={
            "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/64be6658fa8827b9808dfc6b_moodtape-freelance.webp"
          }
          prodactName={"Charlie Heidsieck / Teaser"}
        />
      </div>
      {showVideos && (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-v md:px-8 xsm:px-3 xsm:grid-cols-1 font-semibold'>
          <VideoCards
            videoSrc={V28}
            imgSrc={
              "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/600ab5cafb176940b1788db7_nuxe-moodtape-film-graphiste-freelance-luxe-min.jpg"
            }
            prodactName={"Nuxe"}
          />
          <VideoCards
            videoSrc={V29}
            imgSrc={
              "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/62eba669516926f6d2e00630_loreal_luxe.png"
            }
            prodactName={"L'Oréal Luxe"}
          />
          <VideoCards
            videoSrc={V30}
            imgSrc={
              "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/62e8f63070846315cc702bc3_nescens_cosmetiques_motion_design%20(1).png"
            }
            prodactName={"Nescens"}
          />
          <VideoCards
            videoSrc={V31}
            imgSrc={
              "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/62e7f54a74a978dd0333992a_martell_metaverse.png"
            }
            prodactName={"Martell / Metavers"}
          />
          <VideoCards
            videoSrc={V32}
            imgSrc={
              "https://uploads-ssl.webflow.com/5dcafff3c897156f8d1805ac/62e8f986a89d6e99b70e03d4_coty_1%20(2).png"
            }
            prodactName={"Coty"}
          />
        </div>
      )}
      <div className='mt-7 flex justify-center'>
        <button
          onClick={toggleVideos}
          type='button'
          className='tracking-wide bg-primary text-xl text-black px-10 py-3 rounded-[16px] hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:bg-black hover:text-white w-max-min h-[50px] border-black'>
          {showVideos ? "Hide" : "More"}
        </button>
      </div>
      <div className='lg:mt-40 px-3 md:mt-16 xsm:mt-16'>
        <div className='text-center'>
          <div className='showreel text-[#2a2a2a] mb-8 showreelxsm'>
            Showreel
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div
            className=' rounded-lg embed-responsive embed-responsive-16by9 relative w-full overflow-hidden max-h-[700px] max-w-[1500px] flex justify-center items-center'
            style={{ paddingTop: "56.25%" }}>
            {isPlaying ? (
              <iframe
                className='viff w-full h-full z-10'
                ref={iframeRef}
                src='https://player.vimeo.com/video/702055823?autoplay=1'
                title='Showreel, vidéo du motion designer freelance Fabien Bouadi'
                frameborder='0'
                allowfullscreen=''
                allow='autoplay; encrypted-media loop'
                data-ready='true'
                id='vimeoIframe'></iframe>
            ) : (
              <div
                className='z-20 md:text-2xl xsm:text-lg absolute w-[100px] h-[50px] bg-white text-black playcenter text-center items-center flex justify-center rounded-[50%] sm:py-20 sm:px-20 xsm:py-0 xsm:px-0 xsm:w-[80px] xsm:h-[75px] md:h-auto md:w-auto cursor-pointer'
                style={{ backgroundImage: `url(${Projects_bg})` }}
                onClick={handlePlayClick}>
                PLAY
              </div>
            )}
            <video
              src={V1}
              className={`w-full h-full fviff${isPlaying ? "" : ""}`}
              autoPlay
              muted
              loop></video>
          </div>
        </div>
      </div>
      <Profil/>
      <Footer pr={"2em"} pl={"2em"}/>
    </div>
  );
};

export default ProjectsGallery;
