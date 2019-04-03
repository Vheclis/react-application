import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import ListPage from './ListPage'

const HomeAllQuestionsQuery = graphql`
  query HomeAllPostQuery {
    questions {
      ...ListPage_questions
    }
  }
`

class Home extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={HomeAllQuestionsQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <ListPage questions={props.questions} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default Home