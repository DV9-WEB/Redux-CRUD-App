import React, { useState } from "react";
import { editUser } from "../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()
  const existingUser = users.filter(user => user.id == id)
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: id, name: uname, email: uemail }));
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
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={uname}
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
              className="form-control"
              placeholder="Email"
              value={uemail }
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;