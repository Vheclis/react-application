import React from 'react'
import "./index.css"
import { Form, Col, Button, Container } from 'react-bootstrap'
import Answers from './Answers'

class QuestionForm extends React.Component {

  state = {
    description: this.props.description,
    answers: this.props.answers,
    theme: this.props.theme,
    correctAnswer: this.props.correctAnswer,
    mutationAction: this.props.mutationAction,
    answersAmount: this.props.answersAmount,
    shouldRerender: false,
  }

  removeAnswer = () => {
    const newAnswers = this.state.answers;
    newAnswers.pop();
    this.setState({
      answers: newAnswers,
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeOnAnswear = (e, key) => {
    const answers = this.state.answers;
    if (typeof answers[key] === 'undefined') {
      answers[key] = (e.target.value)
      this.setState({ answers });
    } else {
      const newAnswers = answers.map((answer, index) => {
        if (index === key) {
          return e.target.value
        }
        return answer
      })
      this.setState({ answers: newAnswers });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      description,
      answers,
      theme,
      correctAnswer,
      mutationAction
    } = this.state;
    if (mutationAction === 'update') {
      console.log(this.props._id, description, answers, theme, correctAnswer)
      this.props.mutation(this.props._id, description, answers, theme, correctAnswer, () => this.props.history.replace('/'))
    }
    this.props.mutation(description, answers, theme, correctAnswer, () => this.props.history.replace('/'))
  }

  changeAnswersCount = (operation) => {
    let answersAmount = this.state.answersAmount;
    if (operation === 'sum') {
      answersAmount += 1
    } else {
      if (this.state.answers.length >= answersAmount) {
        this.removeAnswer()
      }
      answersAmount = answersAmount > 1 ? answersAmount - 1 : answersAmount
    }
    this.setState({ shouldRerender: true, answersAmount });
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
                defaultValue={this.state.description}
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
                mutationAction={this.state.mutationAction}
                answers={this.state.answers}
                handleChange={this.handleChangeOnAnswear}
                answersAmount={this.state.answersAmount}
              />
              {console.log('answersAmount', this.state.answersAmount)}
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Theme</Form.Label>
            <Form.Control
              defaultValue={this.state.theme}
              onChange={this.handleChange}
              name="theme"
              placeholder="Enter a theme"
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Correct Answer</Form.Label>
            <Form.Control
              defaultValue={this.state.correctAnswer}
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
