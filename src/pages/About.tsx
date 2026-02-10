const profileImage = "/images/profile.jpg";

export default function About() {
  return (
    <div className="stack">
      <div className="card about">
        <div className="about-img">
          <img src={profileImage} alt="Profielfoto" />
        </div>

        <div>
          <p className="eyebrow">About Me</p>
          <h1>Brahim El Mossaoui</h1>
          <p className="lead">
            Student graduaat programmeren met een focus op webdevelopment. Ik hou van helder ontwerp,
            duidelijke code en het bouwen van oplossingen die mensen echt gebruiken.
          </p>

          <div className="grid-2">
            <div>
              <p className="eyebrow">Stage</p>
              <p>Brightest - Kontich</p>
            </div>
            <div>
              <p className="eyebrow">Rol</p>
              <p>Junior Full-Stack Developer</p>
            </div>
          </div>

          <div className="row mt-16">
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/brahim-el-mossaoui-347a58223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profiel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
