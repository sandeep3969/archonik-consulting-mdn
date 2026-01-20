import useReveal from '../hooks/useReveal';

export default function Services({ setPage }) {
  const [introRef, introVisible] = useReveal();
  const [prodRef, prodVisible] = useReveal();
  const [certRef, certVisible] = useReveal();
  const [creativeRef, creativeVisible] = useReveal();
  const [strategyRef, strategyVisible] = useReveal();

  return (
    <section className="container">

      {/* INTRODUCTION */}
      <div
        ref={introRef}
        className={`reveal ${introVisible ? 'visible' : ''}`}
      >
        <h1>Our Services</h1>

        <h2>Introduction</h2>

        <p>
          We help studios bridge the gap from creative ambition to optimized
          execution. Whether you are preparing to enter your first console
          submission, scaling your team for live service ops, or planning your
          next major release date, our goal is simple: help you ship on time and
          with confidence.
        </p>

        <p>
          Our services are modular and on-demand. We work with your team to
          identify the specific areas of support you need and build a targeted
          plan to provide cost efficient solutions.
        </p>

        <p>
          Please take a look below at the services we offer and reach out to
          connect about your needs.
        </p>
      </div>

      {/* PRODUCTION SUPPORT */}
      <div
        ref={prodRef}
        className={`card reveal ${prodVisible ? 'visible' : ''}`}
        style={{ marginTop: '80px' }}
      >
        <h2>Production Support</h2>

        <p><strong>We are force multipliers for supporting creators</strong></p>

        <p>
          Our producers and operations experts build systems that empower
          creativity instead of restricting it. We help your team plan
          milestones, anticipate blockers, and stay aligned across art, code,
          and design.
        </p>

        <p><strong>We help you:</strong></p>
        <ul>
          <li>Build realistic milestone and roadmap plans</li>
          <li>Design agile or hybrid pipelines that match your culture</li>
          <li>Manage risk across internal and external partners</li>
        </ul>

        <p><em>
          We’ve seen how the right structure turns vision into results, and how
          the wrong one can paralyze progress.
        </em></p>
      </div>

      {/* CERTIFICATION */}
      <div
        ref={certRef}
        className={`card reveal ${certVisible ? 'visible' : ''}`}
        style={{ marginTop: '60px' }}
      >
        <h2>Certification and Launch Readiness</h2>

        <p><strong>Your game deserves to be seen. We make sure it is.</strong></p>

        <p>
          Our publishing and release support covers everything from First Party
          certification planning to launch readiness. We coordinate the details
          that determine whether your title gets featured or forgotten.
        </p>

        <p><strong>We help you:</strong></p>
        <ul>
          <li>Set up and optimize storefronts on PC and Console platforms</li>
          <li>Design scalable internal release operations processes</li>
          <li>Prepare for First Party certification</li>
          <li>Align marketing beats with platform events and opportunities</li>
          <li>Build community and launch communication strategies</li>
        </ul>

        <p><em>
          We’ve managed storefronts and launches for dozens of 2K titles, from
          Borderlands to NBA 2K. We know what it takes to go live successfully.
        </em></p>
      </div>

      {/* CREATIVE */}
      <div
        ref={creativeRef}
        className={`card reveal ${creativeVisible ? 'visible' : ''}`}
        style={{ marginTop: '60px' }}
      >
        <h2>Creative and Narrative Consulting</h2>

        <p><strong>Build worlds that stay with players.</strong></p>

        <p>
          We provide creative alignment and story structure expertise that keep
          your game’s tone, lore, and emotional core intact through development.
        </p>

        <p><strong>We help you:</strong></p>
        <ul>
          <li>Develop or refine story and worldbuilding foundations</li>
          <li>Create narrative design documentation and voice</li>
          <li>Review, edit, and polish scripts for clarity and tone</li>
          <li>Ensure gameplay and narrative reinforce each other</li>
        </ul>

        <p><em>
          Great stories survive production. We make sure yours does.
        </em></p>
      </div>

      {/* STRATEGY */}
      <div
        ref={strategyRef}
        className={`card reveal ${strategyVisible ? 'visible' : ''}`}
        style={{ marginTop: '60px' }}
      >
        <h2>Strategic Planning and Advice</h2>

        <p>
          <strong>
            We help studios think like publishers — while staying independent.
          </strong>
        </p>

        <p>
          Our leadership team brings decades of experience working with
          executives, investors, and platform partners. We advise studios on
          how to position themselves for success, funding, and sustainable
          growth.
        </p>

        <p><strong>We help you:</strong></p>
        <ul>
          <li>Prepare funding decks and pitch materials</li>
          <li>Navigate platform relationships and partnership strategy</li>
          <li>Plan studio growth, staffing, and operational models</li>
          <li>Communicate effectively with partners and investors</li>
        </ul>

        <p><em>
          We bridge the gap between creative ambition and business reality.
        </em></p>
      </div>

      {/* CTA */}
      <button
        className="btn"
        style={{ marginTop: '80px' }}
        onClick={() => setPage('contact')}
      >
        Contact Us
      </button>

    </section>
  );
}
