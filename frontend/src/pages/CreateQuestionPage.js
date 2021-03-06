import React from 'react'
import "../index.css"
import CreateQuestionMutation from '../mutations/CreateQuestionMutation'
import QuestionForm from '../components/QuestionForm'

class CreateQuestionPage extends React.Component {
  render() {
    return (
      <QuestionForm
        answersAmount={1}
        mutationAction='create'
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