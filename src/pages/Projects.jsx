import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ProjectsGallery from "../components/ProjectsGallery";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div className="">
            <Hero className='fixed'/>
            <ProjectsGallery/>
        </div>
    );
};

export default Projects;