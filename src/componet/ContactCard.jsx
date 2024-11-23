import React from "react";

function ContactCard(props) {
  const { list } = props;
  return list.map((item) => (
    <div className="contact-info-item padd-15" key={item.id}>
      <div className="icon">
        <i className={item.icon}></i>
      </div>
      <h4>{item.title}</h4>
      <p>{item.Discription}</p>
    </div>
  ));
}

export default ContactCard;
