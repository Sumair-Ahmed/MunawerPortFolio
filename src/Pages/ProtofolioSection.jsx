import React, { useState } from "react";
import ProtofolioSectionData from "../Data/ProtfolioSectionData.json";
import ThemeChange from "../componet/ThemeChange";
import ProtfolioCard from "../componet/ProtfolioCard";
import Dock from "../componet/Dock";
import SecondLoading from "../componet/SecondLoading";

function PortofolioSection() {
  const [isVisible, setisVisible] = useState(false);
  const [selectedItem, setselectedItem] = useState({});
  const [spinner, setSpinner] = useState(true);
  return (
    <>
      <SecondLoading setSpinner={setSpinner} spinner={spinner} />
      <section
        className={"portfolio section " + (spinner === true ? "Hide" : "")}
      >
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>Recent Projects : </h2>
            </div>
          </div>
          <div className="row">
            <ProtfolioCard
              list={ProtofolioSectionData.Protfolio_cards}
              setisVisible={setisVisible}
              setselectedItem={setselectedItem}
            />
          </div>
        </div>

        <Dock
          isVisible={isVisible}
          selectedItem={selectedItem}
          setisVisible={setisVisible}
        />
        <ThemeChange />
      </section>
    </>
  );
}

export default PortofolioSection;
