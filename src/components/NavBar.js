import React from "react";

import logo from "../assets/logo.svg";
import moonIcon from "../assets/icon-moon.svg";

import { connect } from "react-redux";

import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: var(--nav-height-mobile);
  width: 100vw;
  background-color: var(--clr-nav-purple-gray);

  z-index: 2;

  .nav-logo-container-bg {
    height: var(--nav-height-mobile);
    width: var(--nav-height-mobile);
    background-color: var(--clr-primary-purple);
    border-radius: 0 1.25rem 1.25rem 0;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-logo-container-bg-cut-out {
    height: calc(var(--nav-height-mobile) / 2);

    width: var(--nav-height-mobile);
    background-color: var(--clr-secondary-purple);
    position: absolute;
    bottom: 0;
    border-radius: 1.25rem 0 1.25rem 0;
  }

  .nav-logo {
    z-index: 1;
  }

  /* right part of nav */
  .nav-mode-user-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .nav-divider-thin {
    height: var(--nav-height-mobile);
    width: 0.063em;
    background-color: #494e6e;
  }

  .dark-light-mode-btn-container,
  .avatar-image-container {
    height: var(--nav-height-mobile);
    width: var(--nav-height-mobile);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-image {
    border-radius: 50%;
    height: 2em;
    width: 2em;
  }

  @media screen and (min-width: 1440px) {
    min-height: 100vh;
    width: max-content;
    height: 100%;

    display: flex;
    flex-direction: column;
    border-radius: 0 1.25rem 0 0;
    z-index: 2;

    .nav-logo-container-bg {
      border-radius: 0 0 1.25rem 1.25rem;
    }

    .nav-logo-container-bg-cut-out {
      border-bottom-left-radius: 1.25rem;
    }

    .nav-logo-container {
      position: unset;
      top: 0;
    }
    .nav-divider-thin {
      height: 0.063em;
      width: var(--nav-height-mobile);
    }

    .nav-mode-user-container {
      display: flex;
      flex-direction: column;
    }

    /* the new invoice form responsiveness position for
     desktop will be different because of the nav position */
    // .new-invoice-form-container {
    //   top: 0;
    //   left: 4.5rem;
    // }
    // .invoice-control-container {
    //   padding-top: 4.5rem;
    // }
    // .view-invoice-container {
    //   padding-top: 1rem;
    // }
  }
`;

function NavBar() {
  const userIcon = localStorage.getItem("userIcon");

  return (
    <StyledNavBar>
      <div className="nav-logo-container-bg">
        <img src={logo} alt="company logo" className="nav-logo" />
        <div className="nav-logo-container-bg-cut-out" />
      </div>

      <div className="nav-mode-user-container">
        <div className="dark-light-mode-btn-container">
          <img
            src={moonIcon}
            alt="dark or light color mode"
            className="moon-icon"
          />
        </div>
        <div className="nav-divider-thin" />
        <div className="avatar-image-container">
          <img src={userIcon} alt="user" className="avatar-image" />
        </div>
      </div>
    </StyledNavBar>
  );
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(NavBar);
