import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation UpdateQuestionMutation($id: ID!, $description: String!, $answers: [String!]!,
    $theme: String!, $correctAnswer: String!) {
      updateQuestion(_id: $id, description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {
      _id
    }
  }
`;

export default function UpdateQuestionMutation(_id, description, answers, theme, correctAnswer, callback) {
  const variables = {
    id: _id,
    description,
    answers,
    theme,
    correctAnswer
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        console.log({
          id: _id,
          description,
          answers,
          theme,
          correctAnswer
        })
        callback()
      },
      onError: err => console.error(err),
    },
  )
}