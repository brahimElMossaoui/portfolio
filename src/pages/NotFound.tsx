
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="stack">
      <h1>Pagina niet gevonden</h1>
      <p className="muted">De pagina die je zocht bestaat niet.</p>
      <Link className="btn btn-primary" to="/">
        Naar home
      </Link>
    </div>
  );
}
