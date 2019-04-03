const React = require('react');

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


export default Question;