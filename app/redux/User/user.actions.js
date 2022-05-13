import userTypes from "./user.types";
import { auth, db } from "../../../firebase/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

// AUTHENTICATION
// in progress
export const recoveryUser =
  ({ email }) =>
  async (dispatch) => {
    try {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          dispatch({
            type: userTypes.USER_RECOVERY_SUCCESS,
            payload: true,
          });
        })
        .catch(() => {
          const err = ["Email Not Found! Please Enter A Valid Email"];
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: err,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
// done
export const signOutUser = () => async (dispatch) => {
  try {
    signOut(auth).then(() => {
      console.log("User signed out!");
      dispatch({
        type: userTypes.OUT_CURRENT_USER,
      });
      console.log("User Signed out From Action ::");
    });
  } catch (err) {
    console.log("Error from Sign out action !!");
    console.log(err);
  }
};
// done
export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async () => {
          const qq = query(
            collection(db, "users"),
            where("id", "==", auth.currentUser.uid)
          );
          const qquerySnapshot = await getDocs(qq);
          qquerySnapshot.forEach((doc) => {
            console.log('info user => ', doc.data())
            dispatch({
              type: userTypes.USER_SIGN_IN_SUCCESS,
              payload: doc.data(),
            });
          });
        })
        .catch((err) => {
          console.log(err);
          const error = ["These credientials dosn't much !!"];
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: error,
          });
        });
    } catch (err) {
      console.log("from catch in login redux actions");
      const error = ["Login problem"];
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
    }
  };
// done
const manageUsers = async (userDetails, fullname, email, password) => {
    const newUserRef = doc(collection(db, "users"));
    await setDoc(newUserRef, {
      id: userDetails.user.uid,
      fullname: fullname,
      email: email,
      password: password,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
      bookmarks: [],
      annotations: [],
    });
};
export const signUpUser =
  ({ fullname, email, password }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          manageUsers(userCredential, fullname, email, password);
          dispatch({
            type: userTypes.USER_SIGN_UP_SUCCESS,
            payload: true,
          });
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            const error = "This email address is already in use!";
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          }
          if (err.code === "auth/invalid-email") {
            const error = "This email address is invalid!";
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          }
          console.log(err);
        });
    } catch (err) {
      const error = "Please check your information again";
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
    }
  };

// User
export const setUserD = (user, userDocId) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_USER,
      payload: user,
    });
    dispatch({
      type: userTypes.SET_USER_DOC_ID,
      payload: userDocId,
    });
  } catch (err) {
    console.log("setUser action catch: ", err);
  }
};

// OTHERS
export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});
export const ResetErrorsState = () => ({
  type: userTypes.RESET_ERRORSSTATE_FORMS,
});
export const ResetStates = () => ({
  type: userTypes.RESET_STATES,
});
