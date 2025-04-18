import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: "white"}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"  style={{ color: "white"}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore the blog 👉
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "75vw"}}>
          <section style={{textAlign: "center", display: "flex", flexDirection: "column", gap: "3rem", paddingTop: "4rem", paddingBottom: "4rem"}}>
            <div>
              <h2>What This Blog Covers</h2>
              <ul className='list-cards'>
                <li className='card'>
                  <h3>DevOps</h3>
                  <p>CI/CD, Infrastructure as Code, Monitoring, Scaling</p>
                </li>
                <li className='card'>
                  <h3>Backend</h3>
                  <p>API design, NestJS, microservices, databases</p>
                </li>
                <li className='card'>
                  <h3>Career Growth</h3>
                  <p>Certifications, setups, workflows</p>
                </li>
              </ul>
            </div>

            <div>
              <h2>🚀 Why I Created This Blog</h2>
              <p>
                Because writing forces clarity. Because the best way to learn is to teach.
                And because I want to share the journey with others who are just as curious
                about IT as I am.
              </p>
            </div>

            <div>
              <h2>🔥 What You’ll Get Here</h2>
              <ul>
                <li>No fluff. Just actionable insights.</li>
                <li>Real-world scenarios and solutions.</li>
                <li>Personal notes, experiments, and mistakes — unfiltered.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
