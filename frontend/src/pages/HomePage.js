import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import QuestionsList from '../components/QuestionList'

const HomePageAllQuestionsQuery = graphql`
  query HomePageAllQuestionsQuery @connection(key: "HomePageAllQuestionsQuery", filters: []) {
    questions {
      _id
      description
      answers
      theme
      correctAnswer
      createdAt
      updatedAt
    }
  }
`

class HomePage extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={HomePageAllQuestionsQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <QuestionsList questions={props.questions}/>
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default HomePage