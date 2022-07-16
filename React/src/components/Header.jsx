import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h1>First Ever Tech Personality Award For Africans in Europe</h1>
        <div className="middle">
          <input
            type="text"
            className="inside"
            placeholder="Nominee’s Name, Nominee’s Category"
          />
          <a href="#" className="btn">
            Search
          </a>
        </div>

        <div className="bottom">
          <a href="">
            <h4>View all categories &rarr;</h4>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
