import useReveal from '../hooks/useReveal';
import img1 from '../images/download01.jpeg';
import img2 from '../images/download02.jpeg';
import img3 from '../images/download03.jpeg';
import img4 from '../images/download4.jpeg';

export default function Home({ setPage }) {
  const [servicesRef, servicesVisible] = useReveal();
  const [philosophyRef, philosophyVisible] = useReveal();
  const [teamRef, teamVisible] = useReveal();

  const goToProfile = (id) => {
    sessionStorage.setItem('teamTarget', id);
    setPage('about');
  };

  return (
    <section className="container hero">

      {/* HERO */}
      <h1>Archonik Consulting</h1>

      <h2>
        Helping Studios Build,<br />
        Launch and Scale Great Games.
      </h2>

      <p>
        We provide production, publishing, and strategy expertise for teams
        who want to ship smarter.
      </p>

      <button className="btn" onClick={() => setPage('contact')}>
        Contact Us
      </button>

      {/* KEY SERVICES */}
      <div
        ref={servicesRef}
        className={`reveal ${servicesVisible ? 'visible' : ''}`}
      >
        <h2>How We Can Help</h2>

        <div className="card-grid">
          <div className="card" onClick={() => setPage('services')}>
            <h3>Production Support</h3>
          </div>
          <div className="card" onClick={() => setPage('services')}>
            <h3>Certification and Launch Readiness</h3>
          </div>
          <div className="card" onClick={() => setPage('services')}>
            <h3>Engineering Support</h3>
          </div>
          <div className="card" onClick={() => setPage('services')}>
            <h3>Creative and Narrative Counseling</h3>
          </div>
          <div className="card" onClick={() => setPage('services')}>
            <h3>Strategic Planning and Advice</h3>
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div
        ref={philosophyRef}
        className={`card reveal ${philosophyVisible ? 'visible' : ''}`}
        style={{ marginTop: '80px' }}
      >
        <h2>Our Philosophy</h2>

        <p>
          We believe development teams should have access to expert publishing
          services without long-term commitments.
        </p>

        <p>
          You only pay for what you need.
        </p>
      </div>

      {/* TEAM PREVIEW */}
      <div
        ref={teamRef}
        className={`reveal ${teamVisible ? 'visible' : ''}`}
        style={{ marginTop: '80px' }}
      >
        <h2>Meet Our Team</h2>

        <div className="team-grid">

          <div className="team-card team-preview" onClick={() => goToProfile('rolf')}>
            <img src={img1} alt="Rolf Mohr" />
            <h3>Rolf Mohr</h3>
            <p className="team-role">Creative Director</p>
          </div>

          <div className="team-card team-preview" onClick={() => goToProfile('herrick')}>
            <img src={img2} alt="Herrick Erickson-Brigl" />
            <h3>Herrick Erickson-Brigl</h3>
            <p className="team-role">Executive Producer</p>
          </div>

          <div className="team-card team-preview" onClick={() => goToProfile('mike')}>
            <img src={img3} alt="Mike Anstine" />
            <h3>Mike Anstine</h3>
            <p className="team-role">Technical Director</p>
          </div>

          <div className="team-card team-preview" onClick={() => goToProfile('myles')}>
            <img src={img4} alt="Myles Murphy" />
            <h3>Myles Murphy</h3>
            <p className="team-role">Release Operations & First Party Support</p>
          </div>

        </div>

        <button className="btn" onClick={() => setPage('contact')}>
          Contact Us
        </button>
      </div>

    </section>
  );
}
