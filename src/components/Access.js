import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { login } from "../actions";
import { connect } from "react-redux";

const StyledSignUpSignIn = styled.div`
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  margin: 10% auto 0 auto;

  max-width: min(90%, 768px);

  min-height: 480px;

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #7c5dfa;
    background-color: #7c5dfa;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: none;
    }

    &.ghost {
      background-color: transparent;
      border-color: #ffffff;
    }
  }

  form {
    background-color: var(--clr-background-light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;

    width: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border-radius: 0.25rem;

    border: 2px solid var(--clr-input-border);

    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;

    &:focus {
      outline: 1px solid var(--clr-primary-purple);
      outline-style: auto;
    }
  }

  .responsive-container {
    display: flex;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    background-color: var(--clr-background-light);
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  &.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  &.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #7c5dfa;
    background: -webkit-linear-gradient(to right, #7c5dfa, #9277ff);
    background: linear-gradient(to right, #9277ff, #7c5dfa);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  &.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  &.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    width: min(530px, 90%);

    form {
      padding: 0 5%;

      input {
        width: max(90%, 150px);
      }
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    .responsive-container {
      display: flex;
      flex-direction: column;
    }

    .form-container {
      position: unset;
      top: unset;
      height: 50%;
      padding: 1.4em 0;
      width: 100%;
    }

    .sign-up-container {
      left: unset;
      order: 0;
      transform: translateX(-100%);

      button {
        margin-top: 10%;
      }
    }

    .sign-in-container {
      left: unset;
      margin-top: 10%;
    }

    .overlay-container {
      height: 50%;
      width: 100%;
      left: unset;
    }

    &.right-panel-active .sign-up-container {
      transform: unset;
      webkit-transform: unset;
    }

    &.right-panel-active .overlay-container {
      transform: translateY(100%);
    }
  }
`;

const initialSignInValues = {
  email: "",
  password: "",
};

function Access({ dispatch, userInfo }) {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [signInValues, setSignInValues] = useState(initialSignInValues);
  const [signUpValues, setSignUpValues] = useState({});

  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    setSignInValues({ ...signInValues, [e.target.type]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(signInValues));
    navigate("/invoices");
  };

  return (
    <StyledSignUpSignIn className={rightPanelActive && "right-panel-active"}>
      <div className="responsive-container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>

            <input
              onChange={handleSignInChange}
              value={signInValues.email}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleSignInChange}
              value={signInValues.password}
              type="password"
              placeholder="Password"
            />
            <p>{/* <a href="#">Forgot your password?</a> */}</p>
            <button type="submit">Sign In</button>
            {/* <button>Guest Account</button> */}
          </form>
        </div>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <button
              className="ghost"
              id="signIn"
              onClick={() => {
                setRightPanelActive(false);
              }}
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Don't have an account yet?</h1>

            <button
              className="ghost"
              id="signUp"
              onClick={() => {
                setRightPanelActive(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </StyledSignUpSignIn>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps)(Access);
