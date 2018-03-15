import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";
import { quizFetchList } from "./quiz";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, 'QUIZ_FETCH_LIST', quizFetchList),
  ];
}
