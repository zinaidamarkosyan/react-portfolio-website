import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quaerat omnis aliquam reprehenderit sed. Labore blanditiis maiores magnam similique praesentium rem enim, cumque voluptatibus a incidunt hic tempora doloremque reiciendis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis illo non voluptatum ipsa unde nisi nesciunt omnis nihil accusamus, laudantium vel, dicta blanditiis, iusto soluta reprehenderit voluptate quaerat. Facilis, voluptatem!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit itaque, nostrum eveniet sint nesciunt molestias ab sequi, fugiat hic unde minus magni libero odio non, rem excepturi quisquam expedita pariatur?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
