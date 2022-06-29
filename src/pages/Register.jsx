import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="reg-title">
          <h3>Sign up</h3>
        </div>
        <form>
          <input type="text" name="name" id="name" placeholder="name" />
          <input type="email" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="password2"
          />
          <button type="submit">Submit</button>
        </form>
        <a href="/login">Already have an account?</a>
      </div>
    </div>
  );
};

export default Register;
