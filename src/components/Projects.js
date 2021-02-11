import { useContext } from 'react'; 
import { ProjectContext } from '../context/ProjectContext';

import styles from '../css/Projects.module.css'

const Project = () => {
  const { projects } = useContext(ProjectContext)

  return (
    <div>
      {projects.map(project => {
        return (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.imageContainer}>
            <a href={project.url} target="blank"><img src={project.image} alt={project.alt}/></a> 
            </div>
            <h4 className={styles.title}>{project.name}</h4>
            <p>{project.language}</p>
            <p className={styles.gitlink}><a href={project.github} target="blank">Github</a></p>
          </div>
        )
      })}
    </div>
  );
}

export default Project;