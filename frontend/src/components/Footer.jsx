export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-center">

        <div className="footer-brand">
          <h3>ARCHONIK</h3>
          <p>
            Helping studios build, launch, and scale great games through expert
            production, publishing, and strategy services.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Archonik Consulting
      </div>
    </footer>
  );
}
