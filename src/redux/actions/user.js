import { signInWithGoogle, signOut } from "../../api/firebase/firebase";

export class UserActions {
  static START_LOADING = "[User] Start loading";
  static USER_DATA_LOADED = "[User] User data loaded";
  static USER_DATA_ERROR = "[User] User data error";
}

function startLoading() {
  return {
    type: UserActions.START_LOADING,
  };
}

function updateUserData(data) {
  return {
    type: UserActions.USER_DATA_LOADED,
    payload: data,
  };
}

function updateUserError(error) {
  return {
    type: UserActions.USER_DATA_ERROR,
    payload: error,
  };
}

export function loginUser() {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithGoogle()
      .then((userData) => {
        console.log(userData);
        return dispatch(updateUserData(userData.user));
      })
      .catch((err) => dispatch(updateUserError(err)));
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(startLoading());
    signOut()
      .then(() => dispatch(updateUserData(null)))
      .catch((err) => dispatch(updateUserError(err)));
  };
}
