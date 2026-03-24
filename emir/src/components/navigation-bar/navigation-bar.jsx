import { Link } from "react-router-dom";
import "@/scss/main.scss";

export function NavigationBar() {
  return (
    <div className="container">
      <Link className="container__link" to="/edit-users">
        Edit Users
      </Link>
      <Link className="container__link" to="/users">
        Users
      </Link>
    </div>
  );
}
