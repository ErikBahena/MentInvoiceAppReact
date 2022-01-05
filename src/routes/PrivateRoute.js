import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ token, dispatch }) => {
  return token ? <Outlet /> : <Navigate to="/access" />;
};

const mapStateToProps = (state) => {
  return {
    token: state?.userInfo?.token,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
