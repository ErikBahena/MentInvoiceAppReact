import {
  FETCH_START,
  FETCH_ERROR,
  FETCH_SUCCESS,
  SET_ERROR,
  ADD_INVOICE,
  EDIT_INVOICE,
} from "../actions";

import { getMockData } from "../services";

export const initialState = {
  isLoading: false,
  errorMessage: "",
  invoices: getMockData(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        invoices: [],
        isLoading: true,
        errorMessage: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        invoices: action.payload,
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        invoices: [],
        isLoading: false,
        errorMessage: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        isLoading: false,
        errorMessage: "",
      };
    case EDIT_INVOICE:
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        isLoading: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default reducer;
