import { useState, useEffect, useRef } from 'react';
import img1 from '../images/download01.jpeg';
import img2 from '../images/download02.jpeg';
import img3 from '../images/download03.jpeg';
import img4 from '../images/download4.jpeg';

function Bio({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className={`bio-text ${open ? 'open' : ''}`}>
        {children}
      </p>

      <button
        className="read-more"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Show less' : 'Read more'}
      </button>
    </>
  );
}

export default function About({ setPage }) {
  const rolfRef = useRef(null);
  const herrickRef = useRef(null);
  const mikeRef = useRef(null);
  const mylesRef = useRef(null);

  useEffect(() => {
    const target = sessionStorage.getItem('teamTarget');

    const map = {
      rolf: rolfRef,
      herrick: herrickRef,
      mike: mikeRef,
      myles: mylesRef,
    };

    if (target && map[target]?.current) {
      setTimeout(() => {
        map[target].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 200);

      sessionStorage.removeItem('teamTarget');
    }
  }, []);

  return (
    <section className="container">
      <h1>About Us</h1>

      <p>
        Archonik Consulting is a team comprised of industry veterans with a shared goal
        to help teams of all sizes plan and execute high quality game releases.
      </p>

      <p>
        Our collective experience solving problems for complex multiplayer games and
        major AAA titles alike gives us unique insight to help you plan for pitfalls
        known and unknown on your way to launch.
      </p>

      <button className="btn" onClick={() => setPage('services')}>
        Take a look at the specific Services we provide
      </button>

      <div className="team-grid">

        {/* ROLF */}
        <div className="team-card" ref={rolfRef}>
          <img src={img1} alt="Rolf Mohr" />
          <h3>Rolf Mohr</h3>
          <p className="team-role">Creative Director</p>
          <Bio>
            Rolf brings 33 years of experience across games and animation, having led art
            at Disney, DreamWorks, and Insomniac. His work on titles like Ratchet &amp; Clank,
            Epic Mickey, Bioshock 4, and Halo has defined his reputation as a visionary
            world-builder who blends creative ambition with production reality.
          </Bio>
        </div>

        {/* HERRICK */}
        <div className="team-card" ref={herrickRef}>
          <img src={img2} alt="Herrick Erickson-Brigl" />
          <h3>Herrick Erickson-Brigl</h3>
          <p className="team-role">Executive Producer</p>
          <Bio>
            Herrick has spent more than a decade working in games. He led producers on
            titles for LEGO, PGA, and TopSpin, overseeing cross-disciplinary teams,
            live operations, and certification readiness. His focus: delivering clarity,
            momentum, and results.
          </Bio>
        </div>

        {/* MIKE */}
        <div className="team-card" ref={mikeRef}>
          <img src={img3} alt="Mike Anstine" />
          <h3>Mike Anstine</h3>
          <p className="team-role">Technical Director</p>
          <Bio>
            A veteran of 2K and Mass Media Games, Mike has overseen engineering on dozens
            of shipped titles. Known as a go-to problem-solver, he’s supported projects
            for Marvel, PGA, LEGO, and Firaxis, leading teams through technical
            certification and performance optimization.
          </Bio>
        </div>

        {/* MYLES */}
        <div className="team-card" ref={mylesRef}>
          <img src={img4} alt="Myles Murphy" />
          <h3>Myles Murphy</h3>
          <p className="team-role">Release Operations and First Party Support</p>
          <Bio>
            Myles spent 10 years driving PC Release Operations and First Party
            relationships at 2K, supporting nearly every major release over the past
            decade including NBA 2K, Sid Meier’s Civilization and Borderlands. His
            expertise extends to PC platform strategy, internal training programs for
            release management as well as storefront execution and optimization.
          </Bio>
        </div>

      </div>

      <button className="btn" onClick={() => setPage('contact')}>
        Contact Us
      </button>
    </section>
  );
}
