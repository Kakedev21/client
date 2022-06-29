import React from "react";

const Login = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="reg-title">
          <h3>Log in</h3>
        </div>
        <form>
          <input type="email" name="email" id="email" placeholder="email" />
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

export default Login;
