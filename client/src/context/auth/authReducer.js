const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'REGISTER_FAIL':
    case 'AUTH_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default authReducer;
