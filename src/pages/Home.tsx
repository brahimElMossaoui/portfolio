import { Link } from "react-router-dom";
import { getLatestPosts } from "../data/posts";

const linkedinUrl = "https://www.linkedin.com/in/brahim-el-mossaoui-347a58223/";

export default function Home() {
  const latest = getLatestPosts(1)[0];

  return (
    <div className="stack">
      <section className="hero">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1 className="hero-title">
            Hallo, ik ben
            <br />
            Brahim El Mossaoui
          </h1>
          <p className="lead">
            Student graduaat programmeren met een passie voor het bouwen van nette, functionele
            webapplicaties. Momenteel loop ik stage bij Brightest in Kontich.
          </p>
          <div className="row">
            <Link className="btn btn-primary" to="/blog">
              Bekijk mijn blog
            </Link>
            <a className="btn btn-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">
              linkedin
            </a>
          </div>
        </div>

      </section>

      <section className="stack">
        <div className="row space-between">
          <h2 className="section-title">Latest Blog</h2>
          <Link to="/blog" className="link">
            Alles bekijken -&gt;
          </Link>
        </div>

        <article className="card latest-card">
          <div className="post-meta">Blogpost week 1</div>
          <h3 className="post-title">Dag 1</h3>
          <p className="post-excerpt">
            De eerste dag in het bedrijf was super aangenaam. We werden goed verwelkomd en voelden
            meteen de goede sfeer. We hebben een korte introductie gekregen van het bedrijf, hoe de
            stage zal verlopen en wat de verwachtingen zijn.
          </p>
          <Link className="link" to="/blog">
            Read more -&gt;
          </Link>
        </article>
      </section>

      <section className="card about-me" id="about">
        <div className="about-avatar">
          <img src="/images/profile.jpg" alt="Profielfoto" />
        </div>
        <div>
          <h2>About Me</h2>
          <p className="lead">
            Als student graduaat programmeren heb ik een sterke interesse in webdevelopment.
            Ik focus op het bouwen van nette, functionele webapplicaties en blijf graag
            experimenteren om beter te worden.
          </p>
          <div className="icon-list">
            <div className="icon-row">
              <span className="icon">R</span>
              <span>Junior Full-Stack Developer</span>
            </div>
            <div className="icon-row">
              <span className="icon">L</span>
              <span>Kontich, Belgium</span>
            </div>
          </div>
          <div className="mt-12">
            <div className="eyebrow">Socials</div>
            <div className="socials">
              <a className="social-btn" href={linkedinUrl} target="_blank" rel="noreferrer">
                in
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
