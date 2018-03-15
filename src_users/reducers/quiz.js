// users reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case 'QUIZ_LIST_SAVE':
      return action.users;

    
    // initial state
    default:
      return state;
  }
}