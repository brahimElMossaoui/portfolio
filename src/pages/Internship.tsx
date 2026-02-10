export default function Internship() {
  return (
    <div className="stack">
      <h1>Internship</h1>

      <section className="card">
        <h3>Stage in het kort</h3>
        <ul className="list">
          <li>
            Bedrijf: <strong>Brightest</strong>
          </li>
          <li>
            Locatie: <strong>Kontich</strong>
          </li>
          <li>
            Periode: <strong>02/02 - 31/05</strong>
          </li>
        </ul>
      </section>

      <section className="card">
        <h3>Stageopdracht - BrightSwagShop</h3>
        <p className="lead">
          Het doel van deze stageopdracht is het maken van een applicatie die we kunnen gebruiken als
          testobject voor trainingen, demo, pre-sales en recruiting.
        </p>

        <h4>Onderdelen</h4>
        <ul className="list">
          <li>Webapplicatie (publiek en intern gebruik)</li>
          <li>Mobiele applicatie (intern gebruik)</li>
          <li>REST backend (publiek en intern gebruik)</li>
        </ul>

        <h4>Concept</h4>
        <p className="muted">
          De applicatie is een fake webshop waar mensen Brightest promo spullen op kunnen kopen.
          Er zijn opzettelijk bugs ingebouwd die aan en uitgezet kunnen worden vanuit het adminpaneel.
          Dit laat toe om test automation te tonen op objecten die zich niet goed gedragen.
        </p>

        <h4>Extra’s</h4>
        <p className="muted">
          Vanuit het admin gedeelte kunnen extra instanties aangemaakt worden om gescheiden
          functionaliteit aan te bieden voor bepaalde users. Alle functionaliteit is aanspreekbaar
          via een REST backend.
        </p>

        <h4>Scope per deel</h4>
        <ul className="list">
          <li>Publiek gedeelte: minimale functionaliteit en zeer beperkte backend, dient als informatie naar externe partners</li>
          <li>Intern gedeelte: web- en mobiele app in React, webshop</li>
          <li>Admin gedeelte: creëren van nieuwe instanties, aan- en uitzetten van bugs, aanmaken van users</li>
        </ul>
      </section>

      <section className="card">
        <h3>Over Brightest</h3>
        <p className="lead">
          Brightest is een software testing & quality partner die zich richt op “first time right”
          digitalization en het leveren van kwalitatieve software via testing oplossingen.
        </p>
        <p className="muted">
          Hun expertise omvat onder andere test automation, security testing en performance testing.
          Het hoofdkantoor bevindt zich in Kontich, België.
        </p>
      </section>
    </div>
  );
}
