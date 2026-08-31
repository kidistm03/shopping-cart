import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero-content">


          <h1>
            Discover The Latest
            <br />
            Trends
          </h1>

          <p>
            Find quality products at great prices.
            Shop your favorites and enjoy a simple
            shopping experience.
          </p>

          <div className="hero-buttons">

            <Link
              to="/shop"
              className="hero-primary"
            >
              Shop Now →
            </Link>

            <Link
              to="/shop"
              className="hero-secondary"
            >
              Explore Products
            </Link>

          </div>

        </div>

      </section>


      <section className="features">

        <div className="feature">

          <div>
            <h3>Fast Delivery</h3>

            <p>
              Quick and reliable delivery
            </p>
          </div>
        </div>


        <div className="feature">
          <div>
            <h3>Secure Payment</h3>

            <p>
              Safe and secure checkout
            </p>
          </div>
        </div>

        <div className="feature">
          <div>
            <h3>Customer Support</h3>

            <p>
              We're here to help
            </p>
          </div>
        </div>

      </section>

      <section className="home-section">

        <div className="section-heading">

          <div>

            <h2>
              Find What You Need
            </h2>
          </div>

        </div>


        <div className="category-cards">

          <Link
            to="/shop"
            className="category-card category-purple"
          >

            <br></br><br></br>
            <h3>Clothing</h3>

            <p>
              Discover everyday styles
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-blue"
          >

            <br></br><br></br>
            <h3>Jewelry</h3>

            <p>
              Elegant pieces for you
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-orange"
          >
            <br></br><br></br>

            <h3>Accessories</h3>

            <p>
              Complete your style
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-pink"
          >
            <br></br><br></br>

            <h3>Shoes</h3>

            <p>
              Step into something new
            </p>
          </Link>

        </div>

      </section>
    </main>
  );
}

export default Home;