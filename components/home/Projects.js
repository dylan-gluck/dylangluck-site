import Link from "next/link";
import { projects } from "../../data/projects";
import styles from "../../styles/components/home/Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h5>Selected Works</h5>
        {projects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <a className={styles.projectTitle}>{project.name}</a>
          </Link>
        ))}
        <Link href="/projects">
          <a className={styles.basicLink}>View All Projects</a>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
