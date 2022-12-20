import firebaseAuth from "firebase/auth";
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from "./../firebase/firebase.utils";

jest.mock("firebase/auth", () => {
  return {
    GoogleAuthProvider: jest.fn().mockImplementation(() => {
      return {
        setCustomParameters: jest.fn(),
      };
    }),
    getAuth: jest.fn(),
    signInWithPopup: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
  };
});

test("signInWithGooglePopup to call firebaseAuth's signInWithPopup", () => {
  signInWithGooglePopup();

  expect(firebaseAuth.signInWithPopup).toHaveBeenCalled();
});

test("createAuthUserWithEmailAndPassword to call firebaseAuth's createUserWithEmailAndPassword", () => {
  const testUsername = "user";
  const testPassword = "pass123";
  createAuthUserWithEmailAndPassword(testUsername, testPassword);

  expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
    undefined,
    testUsername,
    testPassword,
  );
});

test("signInAuthUserWithEmailAndPassword to call firebaseAuth's createUserWithEmailAndPassword", () => {
  const testUsername = "user";
  const testPassword = "pass123";
  signInAuthUserWithEmailAndPassword(testUsername, testPassword);

  expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
    undefined,
    testUsername,
    testPassword,
  );
});

test("signOutUser to call firebaseAuth's signOut", () => {
  signOutUser();

  expect(firebaseAuth.signOut).toHaveBeenCalled();
});
