import React from 'react'
import "./index.css"
import CreateQuestionMutation from './mutations/CreateQuestionMutation'
import QuestionForm from './QuestionForm'

class CreateQuestionPage extends React.Component {
  render() {
    return (
      <QuestionForm
        description=''
        answers={[]}
        theme=''
        correctAnswer=''
        mutation={CreateQuestionMutation}
        history={this.props.history}
      />
    )
  }
}

export default CreateQuestionPage