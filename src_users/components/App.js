import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {

    this.props.dispatch({type: 'QUIZ_FETCH_LIST'});
  }

  // render
  render() {

    // render
    return (
      <div className="container">
          
            <h5>{this.props.quiz && this.props.quiz.question_id_1 && this.props.quiz.question_id_1.title}</h5>
            <ul className="list-group">
              <li className="list-group-item">{thi& ts.props.quiz &his.props.quiz.question_id_1 && this.props.quiz.question_id_1.options[0].text}</li>
              <li className="list-group-item">{this.props.quiz && this.props.quiz.question_id_1 && this.props.quiz.question_id_1.options[1].text}</li>
              <li className="list-group-item">{this.props.quiz && this.props.quiz.question_id_1 && this.props.quiz.question_id_1.options[2].text}</li>
              <li className="list-group-item">{this.props.quiz && this.props.quiz.question_id_1 && this.props.quiz.question_id_1.options[3].text}</li>
            </ul>

        </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    quiz : state.quiz 
  };
}
export default connect(mapStateToProps)(App);
