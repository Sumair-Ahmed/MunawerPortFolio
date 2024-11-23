import React from "react";

function SkillsList(props) {
  const { Skills } = props;
  return Skills.map((item) => (
    <div className="skill-item padd-15" key={item.name}>
      <h5>{item.name}</h5>
      <div className="progress">
        <div className="progress-in" style={{ width: "100%" }}></div>
        <div className="skill-percent">{item.Progress}</div>
      </div>
    </div>
  ));
}

export default SkillsList;
