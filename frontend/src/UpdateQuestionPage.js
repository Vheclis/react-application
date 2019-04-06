import React from 'react'
import "./index.css"
import QuestionForm from './QuestionForm'
import UpdateQuestionMutation from './mutations/UpdateQuestionMutation'

class UpdateQuestionPage extends React.Component {

  render() {
    return (
      <QuestionForm
        mutationAction='update'
        answersAmount={this.props.location.state.answers.length}
        _id={this.props.location.state._id}
        description={this.props.location.state.description}
        answers={this.props.location.state.answers}
        theme={this.props.location.state.theme}
        correctAnswer={this.props.location.state.correctAnswer}
        mutation={UpdateQuestionMutation}
        history={this.props.history}
      />
    )
  }
}

export default UpdateQuestionPage