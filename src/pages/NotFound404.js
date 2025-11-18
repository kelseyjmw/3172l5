import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <section className="text-center">
      <h1 className="display-5 fw-bold">404 — Page Not Found</h1>
      <p className="mt-3">Oops! The page you're looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Return Home
      </Link>
    </section>
  );
}