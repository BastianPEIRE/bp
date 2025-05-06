import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className='bg-blue-500'>
      <div>
        <h1>{siteConfig.title}</h1>
        <p style={{ color: "white"}}>{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--secondary button--lg"
            to="/bp/blog"
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
      <main>
        <div>
          <section>
            <div>
              <h2>What This Blog Covers</h2>
              <ul>
                <li>
                  <h3>DevOps</h3>
                  <p>CI/CD, Infrastructure as Code, Monitoring, Scaling</p>
                </li>
                <li>
                  <h3>Backend</h3>
                  <p>API design, NestJS, microservices, databases</p>
                </li>
                <li>
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
