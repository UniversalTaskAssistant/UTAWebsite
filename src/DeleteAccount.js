import React, { useState } from "react";

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch("https://api.apputa.online/users/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: email,
            password: password,
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        setResultMessage("User deletion successful.");
      } catch (error) {
        console.error("Error:", error);
        setResultMessage("User deletion failed.");
      }
    }
  };

  return (
    <div className="container my-4">
      <h2>Delete Account</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="deleteEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="deleteEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deletePassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="deletePassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Account
        </button>
      </form>
      <p className="mt-3">{resultMessage}</p>
    </div>
  );
}

export default DeleteAccount;
