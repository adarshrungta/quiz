// quiz reducer
const INITIAL_STATE = {
  quiz_data : {},
  right_answer_count : 0,
  wrong_answer_count : 0,
  current_index : 1,
  summary: false,
  //status : []
}

export default function quiz(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'QUIZ_SAVE_LIST':
      //return action.quiz;
      (Object.keys(action.quiz)).map((question_data) => {
        action.quiz[question_data].status = 'unanswered';
      })
      return Object.assign({}, state, {quiz_data: action.quiz});
    case 'OPTION_SELECTED' :
      let right_answer_count = state.right_answer_count;
      let wrong_answer_count = state.wrong_answer_count;
      let current_index = state.current_index;
      let quiz_data = JSON.parse(JSON.stringify(state.quiz_data))  ;   

      if(state.quiz_data[`question_id_${state.current_index}`].answer_id == action.data){
        quiz_data[`question_id_${state.current_index}`].status = "rightanswered";
        right_answer_count++;
      }
      else{
        wrong_answer_count++;
        //status = "wronganswered";
        quiz_data[`question_id_${state.current_index}`].status = "wronganswered";
      }
        
      current_index++;
      if (current_index === Object.keys(state.quiz_data).length + 1 ) {
        return Object.assign({}, state, 
          {
            quiz_data : quiz_data,    
            right_answer_count : right_answer_count, 
            wrong_answer_count: wrong_answer_count, 
            current_index : current_index,
            summary: true,
          });
      }
      return Object.assign({}, state, 
        {
          quiz_data : quiz_data,
          right_answer_count: right_answer_count, 
          wrong_answer_count: wrong_answer_count, 
          current_index : current_index
        });
        
     case 'NEXT_QUESTION' : 
     
      let right_answer_count_1 = state.right_answer_count;
      let wrong_answer_count_1 = state.wrong_answer_count;
      let current_index_1 = state.current_index;
      
      quiz_data = JSON.parse(JSON.stringify(state.quiz_data));
      quiz_data[`question_id_${state.current_index}`].status = "unanswered";
      
      wrong_answer_count_1++;
      //status = "unanswered";
      current_index_1++;
      if (current_index_1 === Object.keys(state.quiz_data).length + 1)  {
        return Object.assign({}, state, 
        {
          quiz_data : quiz_data,
          right_answer_count: right_answer_count_1,
          wrong_answer_count: wrong_answer_count_1, 
          current_index : current_index_1,
          summary: true,
        })
      }
      return Object.assign({}, state, 
        {
          quiz_data : quiz_data,
          right_answer_count: right_answer_count_1,
          wrong_answer_count: wrong_answer_count_1, 
          current_index : current_index_1
        });
        
        case 'PREV_QUESTION' : 
     
        let right_answer_count_2 = state.right_answer_count;
        let wrong_answer_count_2 = state.wrong_answer_count;
        let current_index_2 = state.current_index;
        
        current_index_2--;
        return Object.assign({}, state, 
          {
            right_answer_count: right_answer_count_2,
            wrong_answer_count: wrong_answer_count_2, 
            current_index : current_index_2
          });
        
    // initial state
    default:
      return state;
  }
}