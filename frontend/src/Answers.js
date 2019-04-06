import React from 'react'
import './index.css'
import { Form } from 'react-bootstrap'

const getAnswersAmount = answersAmount => answersAmount > 0 ? answersAmount : 1
const getAnswerDefaultValue = (props, key) => {
  const answers = props.answers;
  if (typeof answers[key] === 'undefined') {
    return ''
  }
  return answers[key]
}

class Answers extends React.Component {
  render() {
    return [...Array(getAnswersAmount(this.props.answersAmount)).keys()]
      .map(key =>
        <Form.Control
          className="answer"
          defaultValue={getAnswerDefaultValue(this.props, key)}
          key={key}
          onChange={(event) => this.props.handleChange(event, key)}
          name="answers"
          placeholder="Answers"
          required
        />
      )
  }
}

export default Answers;
