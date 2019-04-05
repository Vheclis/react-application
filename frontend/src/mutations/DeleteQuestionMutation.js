import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation DeleteQuestionMutation($id: ID!) {
    deleteQuestion(_id: $id) {
      _id
    }
  }
`
export default (id, callback) => {
  const variables = {
    id,
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}