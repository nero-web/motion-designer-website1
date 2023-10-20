/** @format */

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import bg_about from "../assets/Projects-bg.jpg";
import img1 from "../assets/playgroundproducts/img1.png";
import img2 from "../assets/playgroundproducts/img2.png";
import img3 from "../assets/playgroundproducts/img3.png";
import img4 from "../assets/playgroundproducts/img4.png";
import img5 from "../assets/playgroundproducts/img5.png";
import img6 from "../assets/playgroundproducts/img6.png";
import img7 from "../assets/playgroundproducts/img7.jpg";
import v1 from "../assets/playgroundproducts/v1.mp4";
import v2 from "../assets/playgroundproducts/v2.mp4";
import v3 from "../assets/playgroundproducts/v3.mp4";
import v4 from "../assets/playgroundproducts/v4.mp4";
import Footer from "../components/Footer";


const Playground = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div
      className='h-[auto] w-full pb-10'
      style={{ backgroundImage: `url(${bg_about})` }}>
      <Navbar NavPosition={"relative"} />
      <div className='is_work is_worklg'>
        <div className='page_main'>
            <h1 className="titrelab">
            A mix of personal, clients projects
            <br />
            and explorations
            </h1>
            <div className="pt-[1em]">
                <div className="work_list work_listmd work_listxsm">
                    <div className="work_item work_itemlg">
                        <img src={img1} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item frscreen:col-span-2 work_itemlg">
                        <img src={img2} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item row-span-2 work_itemlg bgdiv7">
                        <video src={v1} className="work_imagee" autoPlay loop muted autostart playsInline disablePictureInPicture></video>
                    </div>
                    <div className="work_item work_itemlg bgdiv7">
                        <video src={v2} className="work_imagee" autoPlay loop muted autostart playsInline disablePictureInPicture></video>
                    </div>
                    <div className="work_item work_itemlg">
                        <img src={img3} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item frscreen:col-span-2 work_itemlg bgdiv7">
                        <video src={v3} className="work_imagee" autoPlay loop muted autostart playsInline disablePictureInPicture></video>
                    </div>
                    <div className="work_item frscreen:col-span-2 work_itemlg">
                        <img src={img4} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item frscreen:row-span-2 work_itemlg">
                        <img src={img5} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item frscreen:row-span-2 work_itemlg">
                        <img src={img6} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item work_itemlg">
                        <img src={img7} alt="" className="work_imagee"/>
                    </div>
                    <div className="work_item frscreen:col-span-2 work_itemlg bgdiv7">
                        <video src={v4} className="work_imagee" autoPlay loop muted autostart playsInline disablePictureInPicture></video>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer pr={"2em"} pl={"2em"}/>
    </div>
  );
};
export default Playground;
