import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lab Task Sheets',
    Svg: require('@site/static/img/programmer.svg').default,
    description: (
      <>
       All weekly lab scripts and documents will be hosted on this website, allow for more interactive experience.
      </>
    ),
  },
  {
    title: 'Additional Learning Resources',
    Svg: require('@site/static/img/additional_resources.svg').default,
    description: (
      <>
      There will be links to download work sheets, program files, and weekly learning materials.
      </>
    ),
  },
  {
    title: 'Module Information',
    Svg: require('@site/static/img/module_info.svg').default,
    description: (
      <>
        This site contains module information and links to other useful resources. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
