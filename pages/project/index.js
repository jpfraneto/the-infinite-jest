import React, { useState } from 'react';
import { allArticles } from 'contentlayer/generated';
import styles from './Project.module.css';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

export async function getStaticProps({ params }) {
  const aboutArticles = allArticles.filter(x => x.articleType === 'about');
  return { props: { aboutArticles } };
}

const AboutTextDisplay = ({ aboutObject }) => {
  if (!aboutObject.body) {
    return null;
  }
  const MDXContent = useMDXComponent(aboutObject.body.code);
  return (
    <>
      <h3> {aboutObject.title}</h3>
      <MDXContent components={mdxComponents} />
    </>
  );
};

const Project = ({ aboutArticles }) => {
  const [chosenAbout, setChosenAbout] = useState({});

  return (
    <div>
      <h1>What is this project all about?</h1>
      <div className={styles.mainContainer}>
        <div className={styles.aboutsContainer}>
          <ul>
            {aboutArticles.map(article => {
              return (
                <li onClick={() => setChosenAbout(article)}>{article.title}</li>
              );
            })}
          </ul>
        </div>

        {chosenAbout.body && (
          <div className={styles.aboutReader}>
            <AboutTextDisplay aboutObject={chosenAbout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
