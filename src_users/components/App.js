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

  handleClick(id){
    this.props.dispatch({ type: "OPTION_SELECTED", data: id })
  }
  // render
  render() {
    
    return (
      <div className="container">
        { !this.props.summary && <div>
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
        <button onClick={() => this.props.dispatch({type : "SKIPPED_QUESTION"})} className="btn btn-primary">Skip</button>
        
        
        </div>
        }
        { this.props.summary && <div>
          Wrong Answer : {this.props.wrong_answer} <br/ >
          Right Answer : {this.props.right_answer}
        </div>  }

      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    current_index: state.quiz.current_index,
    quiz: state.quiz.quiz_data,
    right_answer : state.quiz.right_answer_count,
    wrong_answer : state.quiz.wrong_answer_count,
    summary: state.quiz.summary,
  };
}
export default connect(mapStateToProps)(App);
