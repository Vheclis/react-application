import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateQuestionMutation($description: String!, $answers: [String!]!,
    $theme: String!, $correctAnswer: String!) {
    createQuestion(description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {
      _id
      description
      answers
      theme
      correctAnswer
    }
  }
`;

export default function CreatePostMutation(description, answers, theme, correctAnswer, callback) {
  const variables = {
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
        callback()
      },
      onError: err => console.error(err),
    },
  )
}