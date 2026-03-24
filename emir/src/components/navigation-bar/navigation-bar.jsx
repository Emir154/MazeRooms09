import { Link } from "react-router-dom";
import "../scss/";

export function NavigationBar() {
  return (
    <div className="container">
      <Link className="container__link" to="/edit-users">
        Edit Users
      </Link>
      <Link className="" to="/users">
        Users
      </Link>
    </div>
  );
}
