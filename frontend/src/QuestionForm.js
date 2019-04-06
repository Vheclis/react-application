import React from 'react'
import "./index.css"
import { Form, Col, Button, Container} from 'react-bootstrap'
import Answers from './Answers'

let answersAmount = 1;

class QuestionForm extends React.Component {

  state = {
    description: this.props.description,
    answers: this.props.answers,
    theme: this.props.theme,
    correctAnswer: this.props.correctAnswer,
    shouldRerender: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeOnAnswear = (e, key) => {
    const { answers } = this.state;
    if (typeof answers[key] === 'undefined') {
      answers.push(e.target.value)
    } else {
      answers[key] = e.target.value
    }
    this.setState({ answers });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { 
      description,
      answers,
      theme,
      correctAnswer
    } = this.state;
    this.props.mutation(description, answers, theme, correctAnswer, () => this.props.history.replace('/'))
  }

  changeAnswersCount = (operation) => {
    if (operation === 'sum') {
      answersAmount += 1
    } else {
      answersAmount = answersAmount > 1 ? answersAmount - 1 : answersAmount
    }
    this.setState({ shouldRerender: true });
  }

  render() {
    return (
      <Container className="container-config">
        <Form
          className="form-config"
          onSubmit={this.handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="description"
                placeholder="Enter a description"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAnswers">

              <Form.Label>Answers</Form.Label>
              <Button
                variant="success"
                className="minor-button"
                onClick={() => this.changeAnswersCount('sum')}
              >+</Button>
              <Button
                variant="danger"
                className="minor-button"
                onClick={() => this.changeAnswersCount('subtract')}
              >-</Button>
              <Answers
                handleChange={this.handleChangeOnAnswear}
                answersAmount={answersAmount}
              />

            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Theme</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="theme"
              placeholder="Enter a theme"
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Correct Answer</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="correctAnswer"
              placeholder="Enter the correct answer - 1) or 2) or 3) ..."
              required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default QuestionForm
