import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch({ type: "QUIZ_FETCH_LIST" });
  }

  handleClick(id) {
    this.props.dispatch({ type: "OPTION_SELECTED", data: id })
  }
  // render
  render() {

    
      let unanswered_count = 0;
      let rightanswered_count = 0;
      let wronganswered_count = 0;
      (Object.keys(this.props.quiz)).map((question_data) => {
        if (this.props.quiz[question_data].status == 'unanswered') {
          unanswered_count = unanswered_count + 1;
        }
        else if (this.props.quiz[question_data].status == 'rightanswered') {
          rightanswered_count = rightanswered_count + 1;
        }
        else {
          wronganswered_count = wronganswered_count + 1;
        }
      })
    

    return (
      <div className="container">
        {!this.props.summary && <div>
          <h5>
            {this.props.quiz &&
              this.props.quiz[`question_id_${this.props.current_index}`] &&
              this.props.quiz[`question_id_${this.props.current_index}`].title}
          </h5>
          <ul>
            {this.props.quiz &&
              this.props.quiz[`question_id_${this.props.current_index}`] &&
              this.props.quiz[`question_id_${this.props.current_index}`].options &&
              this.props.quiz[`question_id_${this.props.current_index}`].options.map((item, i) => {
                return (
                  <li onClick={() => this.handleClick(item.id)} className="list-group-item" key={i}>
                    {item.text}
                  </li>
                );
              })}
          </ul>
          <button onClick={() => this.props.dispatch({ type: "PREV_QUESTION" })} className="btn btn-primary">Prev</button>
          <button onClick={() => this.props.dispatch({ type: "NEXT_QUESTION" })} className="btn btn-primary">Next</button>


        </div>
        }
        
        {this.props.summary && <div>
          Wrong Answer : {wronganswered_count + unanswered_count } <br />
          Right Answer : {rightanswered_count}
          
        </div>}

      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    current_index: state.quiz.current_index,
    quiz: state.quiz.quiz_data,
    right_answer: state.quiz.right_answer_count,
    wrong_answer: state.quiz.wrong_answer_count,
    summary: state.quiz.summary,
  };
}
export default connect(mapStateToProps)(App);
