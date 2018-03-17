// users reducer
export default function quiz(state = {}, action) {
  switch (action.type) {
    case 'QUIZ_SAVE_LIST':
      return action.quiz;

    
    // initial state
    default:
      return state;
  }
}