import userTypes from "./user.types";

const INITIAL_STATE = {
  currentProperty: null,
  propertySignInSuccess: false,
  propertySignUpSuccess: false,
  propertyRecoverySuccess: false,
  userD: null,
  userDocId: null,
  errors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case userTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        propertySignInSuccess: true,
        currentProperty: true,
        userD: action.payload,
      };
    case userTypes.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        propertySignUpSuccess: true,
      };
    case userTypes.USER_RECOVERY_SUCCESS:
      return {
        ...state,
        propertyRecoverySuccess: action.payload,
      };
    case userTypes.OUT_CURRENT_USER:
      return {
        ...INITIAL_STATE,
      };
    // USER
    case userTypes.SET_USER:
      return {
        ...state,
        userD: action.payload,
      };
    case userTypes.SET_USER_DOC_ID:
      return {
        ...state,
        userDocId: action.payload,
      };

    // ERRORS
    case userTypes.RESET_ERRORSSTATE_FORMS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case userTypes.RESET_STATES:
      return {
        currentProperty: null,
        propertySignInSuccess: false,
        propertySignUpSuccess: false,
        propertyRecoverySuccess: false,
        userD: null,
        errors: [],
      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;
