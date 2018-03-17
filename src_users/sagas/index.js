import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { quizFetchList } from "./quiz";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'QUIZ_FETCH_LIST', quizFetchList),
  ];
}
