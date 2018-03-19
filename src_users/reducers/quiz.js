// users reducer
const INITIAL_STATE = {
  quiz_data : {},
  right_answer_count : 0,
  wrong_answer_count : 0,
  current_index : 1,
  summary: false,
}


export default function quiz(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'QUIZ_SAVE_LIST':
      //return action.quiz;
      return Object.assign({}, state, {quiz_data: action.quiz});
    case 'OPTION_SELECTED' :
      let right_answer_count = state.right_answer_count;
      let wrong_answer_count = state.wrong_answer_count;
      let current_index = state.current_index;
      if(state.quiz_data[`question_id_${state.current_index}`].answer_id == action.data)
        right_answer_count++;
      else
        wrong_answer_count++;
      current_index++;
      if (current_index === Object.keys(state.quiz_data).length + 1 ) {
        return Object.assign({}, state, 
          {
            right_answer_count: right_answer_count, 
            wrong_answer_count: wrong_answer_count, 
            current_index : current_index,
            summary: true,
          });
      }
      return Object.assign({}, state, 
        {
          right_answer_count: right_answer_count, 
          wrong_answer_count: wrong_answer_count, 
          current_index : current_index
        });
     case 'SKIPPED_QUESTION' : 
      let wrong_answer_count_1 = state.wrong_answer_count;
      let current_index_1 = state.current_index;
      wrong_answer_count_1++;
      current_index_1++;
      if (current_index === Object.keys(state.quiz_data).length + 1)  {
        return Object.assign({}, state, 
        {
          wrong_answer_count: wrong_answer_count_1, 
          current_index : current_index_1,
          summary: true,
        })
      }
      return Object.assign({}, state, 
        {
          wrong_answer_count: wrong_answer_count_1, 
          current_index : current_index_1
        });  

    // initial state
    default:
      return state;
  }
}