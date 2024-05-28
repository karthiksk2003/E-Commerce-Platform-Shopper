import React from 'react';
import './CSS/loginsignup.css';

const loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
          <div className="loginsignup-agree">
            <input type="checkbox" id="termsCheckbox" />
            <label htmlFor="termsCheckbox">
              By continuing, I agree to the terms of use & privacy policy
            </label>
          </div>
        </p>
      </div>
    </div>
  );
};

export default loginsignup;
