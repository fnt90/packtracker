import { Link } from "react-router-dom";

export default function Header() {
 
  return (
    <header className="headerBar">
      <h1>PackTrack</h1>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packagetrack">Package Tracking</Link>
        </li>
      </ul>
    </header>
  );
}