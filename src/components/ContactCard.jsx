import React from "react";
import userImage from "../images/profile.png";

function ContactCard({ contact }) {
  return (
    <div className="card mt-2">
      <div className="card-header d-flex justify-content-between">
        <div>
          <img src={userImage} alt="user" width="40px" />
          <span className="px-4">{contact.name}</span>
        </div>
        <div className="align-middle">
          <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{contact.email}</p>        
      </div>
    </div>
  );
}

export default ContactCard;
