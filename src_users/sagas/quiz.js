import { call, put } from "redux-saga/effects";
import ApiQuiz from "../api/quiz";

// fetch the user's list
export function* quizFetchList(action) {
  // call the api to get the users list
  debugger;
  const quiz = yield call(ApiQuiz.getList);

  // save the quiz in state
  yield put({
    type: 'QUIZ_SAVE_LIST',
    quiz: quiz,
  });
}
