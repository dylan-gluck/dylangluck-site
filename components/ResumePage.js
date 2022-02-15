import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { resumeContent } from "../data/resumeContent";
import styles from "../styles/components/Resume.module.scss";

function ResumePage() {
  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        <div className={styles.about}>
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
        </div>
        <div className={styles.keywords}>
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
        </div>
        {/* Doesnt Make Sense to Use This Here */}
        {/* <div className={styles.keywords}>
          <h3 className={styles.sectionTitle}>Current Research</h3>
          <ul>
            {resumeContent.about.research.map((keyword, i) => {
              return (
                <li className={styles.keyword} key={i}>
                  {keyword}
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default ResumePage;
