// API Quiz static class
export default class ApiQuiz {
  // get a list of users
  static getList() {
    
    return fetch('https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json').then(response => {
   
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
