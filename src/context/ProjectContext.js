import { createContext, useEffect, useState } from 'react'; 

import musicLogo from '../assets/equalizer-24px.svg'; 
import archCubes from '../assets/cubes-solid.svg'; 
import travelVue from '../assets/vue.png'


export const ProjectContext = createContext(); 

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: musicLogo,
      url: "http://kyd.one/music-player/",
      name: "Music Player", 
      language: "HTML, CSS, JavaScript",
      github: "https://github.com/kydkit/music-player"
    }, 
    {
      id: 2,
      image: travelVue,
      url: "http://kyd.one/vue-travel-list/",
      name: "Travel List", 
      language: "HTML, CSS, Vue.js",
      github: "https://github.com/kydkit/vue-travel-list"
    }, 
    {
      id: 3,
      image: "placeholder",
      url: "http://kyd.one/high-on-hayon",
      name: "High On Hayon", 
      language: "HTML, CSS",
      github: "https://github.com/kydkit/high-on-hayon"
    }, 
    {
      id: 4,
      image: archCubes,
      url: "http://kyd.one/architecture-viz/",
      name: "The Other Architecture", 
      language: "HTML, CSS, JavaScript",
      github: "https://github.com/kydkit/architecture-viz"
    }
    
  ])

  return (
    <ProjectContext.Provider value={{projects}}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContextProvider;
