import React from "react";

function AboutContainer(props) {
  const { list } = props;
  return list.map((item) => (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
        <i className="fa fa-calendar"></i> {item.Date}
      </h3>
      <h4 className="timeline-title">{item.title}</h4>
      <p className="timeline-text">{item.Discription}</p>
    </div>
  ));
}

export default AboutContainer;
