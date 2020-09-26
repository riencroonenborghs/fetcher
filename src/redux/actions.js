import { SET_JWT_DATA, SIGN_OUT } from "./actionTypes";

export const setJWTData = content => ({
  type: SET_JWT_DATA,
  payload: {
    token: content.token,
    expires: content.exp || content.expires
  }
});

export const signOut = () => ({
  type: SIGN_OUT
});