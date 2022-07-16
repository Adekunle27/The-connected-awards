import React from "react";
import "./Target.css";
import awareness from "../images/awareness.png";
import competition from "../images/competition.png";
import dices from "../images/dices.png";
import trophy from "../images/trophy.png";

const Target = () => {
  return (
    <section className="target">
      <div className="container target__categories">
        <div className="top">
          <h3>Our Target</h3>
        </div>

        <div className="boxes">
          <article className="target__box">
            {/* <!-- <i className="uil uil-bullseye"></i> --> */}
            <img src={awareness} alt="" />
            <h5>Awareness</h5>
          </article>
          <article className="target__box">
            <img src={competition} alt="" />
            <h5>Competition</h5>
          </article>
          <article className="target__box">
            <img src={dices} alt="" />
            <h5>Entertainment</h5>
          </article>
          <article className="target__box">
            {/* <!-- <span className="target__icons"><i className="uil uil-bullseye"></i></span> --> */}
            <img src={trophy} alt="" />
            <h5>Recognition</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Target;
