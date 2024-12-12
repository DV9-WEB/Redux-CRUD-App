import React, { useState } from "react";
import { addUser } from "../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim()) {
      alert("Name and Email are required.");
      return;
    }

    // Add User
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newId, name, email }));

    // Navigate back to Home
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div
        className="p-4"
        style={{
          border: "2px solid limegreen",
          borderRadius: "10px",
        }}
      >
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={name} // Correct binding
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "90%",
                margin: "0 auto",
                display: "block",
                border: "1px solid limegreen",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={email} // Correct binding
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "90%",
                margin: "0 auto",
                display: "block",
                border: "1px solid limegreen",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success px-4"
              style={{
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
