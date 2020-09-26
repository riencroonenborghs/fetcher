import { SET_JWT_DATA, SIGN_OUT } from '../actionTypes';

const initialState = {
  authenticated: false,
  token: null,
  expires: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_JWT_DATA: {
      const { token, expires } = action.payload;
      return {
        ...state,
        authenticated: true,
        token: token,
        expires: typeof(expires) == "string"  ? new Date(expires) : expires
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        authenticated: false,
        token: null,
        expires: null
      };
    }
    default:
      return state;
  }
}
