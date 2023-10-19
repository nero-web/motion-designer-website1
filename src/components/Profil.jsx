/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div className='profil mt-40 bg-transparent w-auto h-auto px-2'>
      <div className='about aboutmd'>
        <div className='firstdiv firstdivmd'>
          <div className=''>
            <h2 className='arth2lg arth2xsm arth2md font-light'>Art Direction&</h2>
            <br />
          </div>
          <div className=''>
            <h2 className='pb-10 arth2lg arth2xsm arth2md'>Motion Design</h2>
          </div>
          <div className='w-full self-start'>
            <p className='art-p'>
              Directeur Artistique, Motion designer freelance basé à Paris,
              <br />
              je collabore étroitement avec mes clients pour raconter leurs
              histoires, en captivant les audiences grâce à la création
              d'expériences uniques.
            </p>
          </div>
          <div className="w-full h-auto">
            <div className='art-p-a px-2 text-center'>
              <a
                href='/blog-directeur-artistique-et-motion-designer-fabien-bouadi'
                className='link-about-section'>
                #MOTION&nbsp;DESIGN
              </a>
              <a
                href='/blog-directeur-artistique-et-motion-designer-fabien-bouadi'
                className='link-about-section'>
                #ART&nbsp;DERCTION
              </a>
              <a
                href='/blog-directeur-artistique-et-motion-designer-fabien-bouadi'
                className='link-about-section'>
                #MOODTAPE
              </a>
            </div>
          </div>
        </div>
        <div className='seconddiv flex justify-center'>
          <Link to={"/about"}>
          <div className='button-circle absolute'>
            <div className='w-[11em] h-[11em]'>
              <a
                href='/portfolio-motion-designer-freelance'
                className='max-w-[100%] link-block-43'>
                {" "}
              </a>
            </div>
            <div className='wrapper-title linkk'>
              <h3 data-text='ABOUT' className='is-special-h px-16 spann'>
                ABOUT
              </h3>
            </div>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Profil;
