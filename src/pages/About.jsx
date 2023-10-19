/** @format */

import React, { useEffect } from "react";
import bg_about from "../assets/Projects-bg.jpg";
import Navbar from "../components/Navbar";
import Aboutimg from "../assets/Aboutimg.png";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className='min-h-[100vh] h-auto relative pb-10'
      style={{ backgroundImage: `url(${bg_about})` }}>
      <Navbar className="" NavPosition={"relative"}/>
      <div className='cont-about'>
        <div className='profil-zone'>
          <div className='sp-p-img sp-p-imgmd'>
            <div className="max-w-[900px]">
            <p className="about-first-p">
              Directeur Artistique / Graphiste Publicitaire de formation,
              <br /> je
              termine mon cursus chez BuyBuy (Magazine de mode et de luxe).
              <br />
              <br />
              Cette expérience confirme mon goût pour l’image. Après plus d’une
              année passée à l’Agence Vertu
              <br />
               comme Graphiste, j’intègre l’agence
              Malherbe Design en tant que Directeur Artistique / Motion
              Designer. Enfin, je m’installe comme DA, Motion Designer
              <br />
              <br />
               Freelance
              et me spécialise dans l’univers du luxe pour des marques telles
              que :
              <br />
              <br />
               Dior, Guerlain, Lancôme, Prada, Cacharel, Kenzo, Nina Ricci
               <br />
              Yves Saint Laurent, Courrèges, Ruinart…
            </p>
            </div>
            <div className="imgcenter">
                <img src={Aboutimg} alt='' className="imgg"/>
            </div>
          </div>
        </div>
        <div className="pt-[141px] flex flex-row pb-20 aboutsecd md:px-10 xsm:px-0">
          <div className="md:me-20 xsm:me-0 pb-8">
            <ol className="mt-0">
              <li className="mt-0 ps-0">
                <div className="blocksecondabout">
                  <strong className="bold-about">Motion Design 2D</strong>
                  (Camera, Animation, Compositing).
                </div>
              </li>
              <li className="mt-0 ps-0">
                <div className="blocksecondabout">
                  <strong className="bold-about">3D</strong>
                  (Cinema 4D,  Octane render, Redshift, Arnold Render, X-Particules, RealFlow).
                </div>
              </li>
              <li className="mt-0 ps-0">
                <div className="blocksecondabout">
                  <strong className="bold-about">Moodboards / Moodtape</strong>
                  (Typographie, iconographie, style, gamme chromatique...).
                </div>
              </li>
              <li className="mt-0 ps-0">
                <div className="blocksecondabout">
                  <strong className="bold-about">Direction Artistique</strong>
                  (Conception graphique, Animatique, Stills, Cinémagraphe, UI Motion)
                </div>
              </li>
            </ol>
          </div>
          <div className="">
            <h2 className="h2about">Agences :</h2>
            <div className="h2aboutdiv">Malherbe Design</div>
            <div className="h2aboutdiv">Publicis Luxe</div>
            <div className="h2aboutdiv">Onirim</div>
            <div className="h2aboutdiv">Ddb Paris</div>
            <div className="h2aboutdiv">Digitas</div>
          </div>
        </div>
      </div>
      <Footer pr={"2em"} pl={"2em"}/>
    </div>
  );
};

export default About;
