import React from "react";

const AdminLogin = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="reg-title">
          <h3>Admin</h3>
        </div>
        <form>
          <input type="text" name="email" id="email" placeholder="username" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
