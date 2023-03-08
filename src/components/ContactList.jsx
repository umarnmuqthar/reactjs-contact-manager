import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard contact={contact}/>
    );
  });
  return <div className="container px-5 pb-5">{renderContactList}</div>;
}

export default ContactList;
