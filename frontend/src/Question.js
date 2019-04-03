const React = require('react');
const {
  createFragmentContainer,
  graphql
} = require('react-relay');

class Question extends React.Component {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div className='pt3'>
          <span>Descripion: </span>{this.props.question.description} <br/>
          <span>Answers: </span>{this.props.question.answers} <br/>
          <span>Theme: </span>{this.props.question.theme} <br/>
          <span>Correct Answers: </span>{this.props.question.correctAnswer} <br/>
          
        </div>
      </div>
    )
  }

  _handleDelete = () => {
  }
}

const FragmentContainer =  createFragmentContainer(Question, graphql`
  fragment Question_question on Question {
    _id
    description
    answers
    theme
    correctAnswer
    createdAt
    updatedAt
  }
`)

export default FragmentContainer;