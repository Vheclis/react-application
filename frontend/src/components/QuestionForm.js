import React from 'react'
import "../index.css"
import { Form, Col, Button, Container } from 'react-bootstrap'
import Answers from './Answers'
import MutationIndex from '../mutations/MutationIndex'
import InputFieldDefault from './InputFieldDefault';

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
    const answers = this.state.answers;
    const newAnswers = answers.slice(0, -1)
    this.setState({
      answers: newAnswers,
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeOnAnswear = (e, key) => {
    let newAnswers;
    const answers = this.state.answers;
    if (typeof answers[key] === 'undefined') {
      newAnswers = [...answers];
      newAnswers[key] = e.target.value
    } else {
      newAnswers = answers.map((answer, index) => {
        if (index === key) {
          return e.target.value
        }
        return answer
      })
    }
    this.setState({ answers: newAnswers });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      mutationAction
    } = this.state;
    MutationIndex[mutationAction](this.state, this.props)
  }

  changeAnswersCount = (operation) => {
    let answersAmount = this.state.answersAmount;
    if (operation === 'sum') {
      answersAmount += 1
    } else {
      if (this.state.answers.length >= answersAmount &&
        this.state.answers.length > 1) {
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
          <InputFieldDefault
            defaultValue={this.state.description}
            onChange={this.handleChange}
            name="description"
            placeholder="Enter a description"
            label="Description"
          />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAnswers">
              <Form.Label><h2>Answers</h2></Form.Label>
              <Button
                variant="success"
                className="btn-sm minor-button"
                onClick={() => this.changeAnswersCount('sum')}
              >+</Button>
              <Button
                variant="danger"
                className="btn-sm minor-button"
                onClick={() => this.changeAnswersCount('subtract')}
              >-</Button>
              <Answers
                mutationAction={this.state.mutationAction}
                answers={this.state.answers}
                handleChange={this.handleChangeOnAnswear}
                answersAmount={this.state.answersAmount}
              />
            </Form.Group>
          </Form.Row>          
          <InputFieldDefault
            defaultValue={this.state.theme}
            onChange={this.handleChange}
            name="theme"
            placeholder="Enter a theme"
            label="Theme"
          />
          <InputFieldDefault
            defaultValue={this.state.correctAnswer}
            onChange={this.handleChange}
            name="correctAnswer"
            placeholder="Enter the correct answer - 1) or 2) or 3) ..."
            label="Correct Answer"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default QuestionForm
