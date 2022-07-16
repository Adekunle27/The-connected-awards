import React from "react";
import "./AwardsAchievement.css";
import people from "../images/people.jpg";
import Reactangle8 from "../images/Rectangle 8.png";
import Vector1 from "../images/Vector (1).png";
import Vector2 from "../images/Vector (2).png";
import Vector3 from "../images/Vector (3).png";
import Vector4 from "../images/Vector (4).png";
import image1 from "../images/WhatsApp Image 2022-02-10 at 10.39 1.png";
import image2 from "../images/WhatsApp Image 2022-02-12 at 11.18 1.png";
import image3 from "../images/WhatsApp Image 2022-02-12 at 11.25 1.png";
import image4 from "../images/Kacy Techtrend Award 1  1.png";
import frame13 from "../images/Frame 13.png";

const AwardsAchievement = () => {
  return (
    <>
      <section className="awards">
        <div className="container awards___container">
          <div className="left">
            <img src={people} alt="" />
          </div>

          <div className="right">
            <h3>The Connected Awards</h3>
            <img src={Reactangle8} alt="" />
            <p>
              The connected is.....It is a long established fact that <br />
              a reader will be distracted by the readable content <br />
              of a page when looking at its layout. The point of <br />
              using Lorem Ipsum is that it has a more-or-less <br />
              normal distribution of letters, as opposed to using <br />
              'Content here, content here', making it look like <br />
              readable English.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
          <div className="other">
            <img src={Vector1} className="first" alt="" />
            <img src={Vector2} className="second" alt="" />
          </div>
        </div>
      </section>
      <section className="techies">
        <div className="container techies___container">
          <div className="techies__left">
            <h3>Celebrated Techies</h3>
            <img src={Reactangle8} alt="" />
            <p>
              The connected is.....It is a long established fact that <br />
              a reader will be distracted by the readable content <br />
              of a page when looking at its layout. The point of <br />
              using Lorem Ipsum is that it has a more-or-less <br />
              normal distribution of letters, as opposed to using <br />
              'Content here, content here', making it look like <br />
              readable English.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>

          <div className="techies__right">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>

          <div className="techies__other">
            <img src={Vector3} className="techies__first" alt="" />
            <img src={Vector4} className="techies__second" alt="" />
          </div>
        </div>
      </section>

      <section className="achievement">
        <div className="container achievement__container">
          <img src={frame13} alt="" />
        </div>
      </section>
    </>
  );
};

export default AwardsAchievement;
