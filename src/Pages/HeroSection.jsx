import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HeroSectionData from "../Data/HomeSectionData.json";
import ThemeChange from "../componet/ThemeChange";
import SecondLoading from "../componet/SecondLoading";

function HeroSection() {
  const [spinner, setSpinner] = useState(true);
  return (
    <>
      <SecondLoading setSpinner={setSpinner} spinner={spinner} />
      <section className={"home section " + (spinner === true ? "Hide" : "")}>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                {HeroSectionData.Title}
                <span className="name">{HeroSectionData.Name}</span>
              </h3>
              <h3 className="my-profession">
                {HeroSectionData.SubTitle}
                <span className="typing">
                  <TypeAnimation
                    sequence={[
                      "Andriod Developer",
                      1000,
                      "Flutter Developer",
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </h3>
              <p>{HeroSectionData.Discription}</p>
              <Link to="/ContactUs" className="btn hire-me">
                Hire Me
              </Link>
            </div>
            {/* <div className="home-img padd-15">
              <img src={HeroSectionData.img} />
            </div> */}
          </div>
        </div>
        <ThemeChange />
      </section>
    </>
  );
}

export default HeroSection;
