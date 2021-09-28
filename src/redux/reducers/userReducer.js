import { UserActions } from "../actions/user";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.USER_DATA_LOADED:
      return { ...state, isLoading: false, data: action.payload };
    case UserActions.USER_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case UserActions.START_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
