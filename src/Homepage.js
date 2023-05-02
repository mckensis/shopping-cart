import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <section className="hero big-background">
        <h1>Welcome to Planty</h1>
        <Link to="/shop" className="big-link">Shop Now</Link>
      </section>
    </main>
  );
}

export default Homepage;
