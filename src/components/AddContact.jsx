import React, { useState } from "react";

function AddContact(props) {
  const [contact, setContact] = useState({});
  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields ar mandatory!");
      return;
    }
    props.addContactHandler(contact);
    setContact({ name: "", email: "" });
  };  

  return (
    <div className="container mb-4 px-5">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={contact.name}
            onChange={(e) => setContact({ name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={contact.email}
            onChange={(e) =>
              setContact({ email: e.target.value, name: contact.name })
            }
          />
        </div>

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
