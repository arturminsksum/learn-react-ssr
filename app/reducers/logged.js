const logged = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.login;
    case 'LOG_OUT':
      return !action.logout;
    case 'SIGN_UP':
      return action.signup;
    default:
      return state;
  }
};
export default logged;
