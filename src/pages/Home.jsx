import { Link } from "react-router-dom";
import logo from '../images/packtrack.png'

export default function Home() {
  return (
    <section className="home">
      <img src={logo} alt="logo for pack track"></img>
      <h1>Welcome To PackTrack</h1>
      <p>
        Welcome to PackTrack, the best package tracking solution out there. Get started by vising the <Link className="link" to="/packagetrack">Package Tracking</Link> page.
      </p>
    
    </section>
  );
}
