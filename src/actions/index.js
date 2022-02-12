import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SET_ERROR = "SET_ERROR";
export const ADD_INVOICE = "ADD_INVOICE";
export const EDIT_INVOICE = "EDIT_INVOICE";
export const ORDER_INVOICES = "ORDER_INVOICES";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const access = (userInfo, callback, type) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    axios
      .post(`http://localhost:9000/api/auth/${type}`, userInfo)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        callback();
      })
      .catch((err) => dispatch(fetchError(err.response.data.message)));
  };
};

export const fetchInvoices = (user_id) => {
  return async (dispatch) => {
    dispatch(fetchStart());

    axiosWithAuth()
      .get(`/invoices/${user_id}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(fetchError(err.message)));
  };
};

export const addInvoice = (newInvoice, user_id) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`/invoices/${user_id}`, newInvoice)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(fetchError(err.message)));
  };
};

export const editInvoice = (updatedInvoice) => {
  return (dispatch) => {
    axios
      .put("http://localhost:3333/smurfs", updatedInvoice)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(fetchError(err.message)));
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const orderInvoices = (orderBy) => {
  return {
    type: ORDER_INVOICES,
    payload: orderBy,
  };
};

export const loginSuccess = (userInfo) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userInfo,
  };
};

export const fetchSuccess = (invoices) => {
  return {
    type: FETCH_SUCCESS,
    payload: invoices,
  };
};

export const fetchError = (errorMessage) => {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
};

export const setError = (errorMessage) => {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  };
};
