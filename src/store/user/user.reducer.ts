import {
  checkUserSession,
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutStart,
  signOutSuccess,
  signUpStart,
  signUpSuccess,
  signOutFailed,
  signUpFailed,
} from "./user.action";
import { AnyAction } from "redux";
import { SignedUser } from "./user.types";

export type UserState = {
  readonly currentUser: SignedUser | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction,
) => {
  if (
    checkUserSession.match(action) ||
    emailSignInStart.match(action) ||
    googleSignInStart.match(action) ||
    signOutStart.match(action) ||
    signUpStart.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLoading: false,
    };
  }

  if (signUpSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  return state;
};
