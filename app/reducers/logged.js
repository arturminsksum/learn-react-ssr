const logged = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.login;
    case 'LOG_OUT':
      return !action.logout;
    default:
      return state;
  }
};
export default logged;
