import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { resumeContent } from "../data/resumeContent";
import styles from "../styles/components/Resume.module.scss";

function ResumePage() {
  return (
    <article className={styles.resumePage}>
      <div className={styles.container}>
        <section className={styles.about}>
          <Link href={"#"} passHref>
            <a className={styles.print}>
              <FontAwesomeIcon icon={faPrint} />
            </a>
          </Link>
          <h2>{resumeContent.about.intro}</h2>
          <h4>
            {resumeContent.about.title} @ {resumeContent.about.employer}
          </h4>
          <div className={styles.contact}>
            <Link
              href={
                "mailto:" +
                resumeContent.about.contact.email +
                "?subject=Let's Work!"
              }
              passHref
            >
              <a target="_blank">{resumeContent.about.contact.email}</a>
            </Link>
            <Link href={"tel:" + resumeContent.about.contact.phone} passHref>
              <a target="_blank">{resumeContent.about.contact.phone}</a>
            </Link>
          </div>
        </section>

        <div className={styles.columns}>
          <div className={styles.left}>
            <section className={`${styles.education} ${styles.section}`}>
              <h3 className={styles.sectionTitle}>Education</h3>
              {resumeContent.education.map((cert, i) => {
                return (
                  <div className={styles.certification} key={i}>
                    <h2>{cert.school}</h2>
                    <h4>{cert.certification}</h4>
                    <span>{cert.dateEnd}</span>
                  </div>
                );
              })}
            </section>
            <section className={`${styles.keywords} ${styles.section}`}>
              <h3 className={styles.sectionTitle}>Key Proficiencies</h3>
              <ul>
                {resumeContent.about.keywords.map((keyword, i) => {
                  return (
                    <li className={styles.keyword} key={i}>
                      {keyword}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className={styles.right}>
            <section className={`${styles.experience} ${styles.section}`}>
              <h3 className={styles.sectionTitle}>Experience</h3>
              {resumeContent.experience.map((position, i) => {
                return (
                  <div className={styles.position} key={i}>
                    <div className={styles.meta}>
                      <span>
                        {position.dateStart}
                        {" - "}
                        {position.dateEnd ? position.dateEnd : "Present"}
                      </span>
                      <span>{position.type}</span>
                      <span>{position.location}</span>
                    </div>
                    <h2 className={styles.title}>{position.title}</h2>
                    <h4 className={styles.employer}>{position.employer}</h4>
                  </div>
                );
              })}
            </section>
            <section className={`${styles.contracts} ${styles.section}`}>
              <h3 className={styles.sectionTitle}>Contract Clients</h3>
              {resumeContent.contracts.map((position, i) => {
                return (
                  <div className={styles.position} key={i}>
                    <div className={styles.meta}>
                      <span>
                        {position.dateStart}
                        {" - "}
                        {position.dateEnd ? position.dateEnd : "Present"}
                      </span>
                      <span>{position.location}</span>
                    </div>
                    <h2 className={styles.employer}>{position.employer}</h2>
                    <h4 className={styles.title}>{position.title}</h4>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ResumePage;
