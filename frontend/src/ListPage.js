import React from 'react'
import Question from './Question'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.questions.map((question) => 
            <Question key={question._id} question={question}/>
          )}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_questions on Question {
    ...Question_question
  }
`)