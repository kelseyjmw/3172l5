export default function NotFound404() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-5 fw-bold">404 — Page Not Found</h1>
      <p className="mt-3">Oops! The page you're looking for doesn’t exist.</p>
      <a href="/" className="btn-grad mt-3">Return to Home</a>
    </section>
  );
}