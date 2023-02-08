//? Library
import { init } from "ityped";
import { useEffect, useRef } from "react";
//? Styles
import styles from "../styles/modules/About.module.css";
const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Fullstack", "Java, React", "Developer"],
    });
  }, []);

  return (
    <div className={styles.intro} id="styles.intro">
      <div className={styles.leftCover}></div>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src="https://portfolio-v1.numanarif.xyz/assets/me.png" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Nu'man Arif</h1>
          <h3>
            <span className={styles.running} ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default About;
