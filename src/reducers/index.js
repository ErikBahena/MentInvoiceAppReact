import {
  FETCH_START,
  FETCH_ERROR,
  FETCH_SUCCESS,
  SET_ERROR,
  ADD_INVOICE,
  EDIT_INVOICE,
  ORDER_INVOICES,
  LOGIN_SUCCESS,
} from "../actions";

export const initialState = {
  isLoading: false,
  errorMessage: "",
  invoices: [],
};

const orderInvoices = (orderBy, invoices) => {
  if (orderBy === "none") return invoices;

  const desiredInvoices = invoices.filter((inv) => inv.status === orderBy);

  const allOtherInvoices = invoices.filter((inv) => inv.status !== orderBy);

  return desiredInvoices.concat(allOtherInvoices);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userIcon", action.payload.photo_url);
      localStorage.setItem("user_id", action.payload.user_id);

      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
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
    case ORDER_INVOICES:
      return {
        ...state,
        invoices: orderInvoices(action.payload, state.invoices),
        isLoading: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default reducer;
