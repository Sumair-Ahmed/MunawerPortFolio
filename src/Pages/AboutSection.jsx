import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutSectionData from "../Data/AboutSectionData.json";
import ThemeChange from "../componet/ThemeChange";
import InformationList from "../componet/InformationList";
import SkillsList from "../componet/SkillsList";
import AboutContainer from "../componet/AboutContainer";
import SecondLoading from "../componet/SecondLoading";
import { TypeAnimation } from "react-type-animation";
function AboutSection() {
  const [spinner, setSpinner] = useState(true);

  return (
    <>
      <SecondLoading setSpinner={setSpinner} spinner={spinner} />
      <section className={"about section " + (spinner === true ? "Hide" : "")}>
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    {AboutSectionData.title}
                    <span>
                      <TypeAnimation
                        sequence={[
                          "Andriod Developer",
                          1000,
                          "Flutter Developer",
                          2000,
                        ]}
                      />
                    </span>
                  </h3>
                  <p>{AboutSectionData.Discription}</p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <InformationList
                      Information={AboutSectionData.Information}
                    />
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      {/* <a className='btn' href={AboutSectionData.CVLocation} download>Download CV</a> */}
                      <Link to="/ContactUs" className="btn hire-me">
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <SkillsList Skills={AboutSectionData.Skills} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <AboutContainer list={AboutSectionData.Education} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <AboutContainer list={AboutSectionData.Experience} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ThemeChange />
      </section>
    </>
  );
}

export default AboutSection;
