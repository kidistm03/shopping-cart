import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            NEW COLLECTION
          </span>

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


        <div className="hero-decoration">

          <div className="hero-circle"></div>

          <div className="shopping-bag">
            🛍️
          </div>

        </div>

      </section>


      <section className="features">

        <div className="feature">
          <div className="feature-icon">
            🚚
          </div>

          <div>
            <h3>Fast Delivery</h3>

            <p>
              Quick and reliable delivery
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            🔒
          </div>

          <div>
            <h3>Secure Payment</h3>

            <p>
              Safe and secure checkout
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            ↩️
          </div>

          <div>
            <h3>Easy Returns</h3>

            <p>
              Simple return process
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            💬
          </div>

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
            <span>SHOP BY CATEGORY</span>

            <h2>
              Find What You Need
            </h2>
          </div>

          <Link to="/shop">
            View All →
          </Link>

        </div>


        <div className="category-cards">

          <Link
            to="/shop"
            className="category-card category-purple"
          >
            <div className="category-icon">
              👕
            </div>

            <h3>Clothing</h3>

            <p>
              Discover everyday styles
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-blue"
          >
            <div className="category-icon">
              💍
            </div>

            <h3>Jewelry</h3>

            <p>
              Elegant pieces for you
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-orange"
          >
            <div className="category-icon">
              🎒
            </div>

            <h3>Accessories</h3>

            <p>
              Complete your style
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card category-pink"
          >
            <div className="category-icon">
              👟
            </div>

            <h3>Shoes</h3>

            <p>
              Step into something new
            </p>
          </Link>

        </div>

      </section>

      <section className="home-cta">

        <div>
          <span>
            READY TO SHOP?
          </span>

          <h2>
            Your next favorite
            <br />
            product is waiting.
          </h2>

          <p>
            Explore our collection and find
            something you'll love.
          </p>
        </div>

        <Link to="/shop">
          Start Shopping →
        </Link>

      </section>

    </main>
  );
}

export default Home;