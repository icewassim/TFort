const scamsReducer = (state = [], action) => {
  switch (action.type) {
  case 'POST_NEW':
    return action.payload.data || state;
  default:
  }

  return state;
};

export default scamsReducer;
