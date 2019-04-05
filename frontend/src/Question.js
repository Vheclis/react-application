import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Form, FormGroup, Row, Col } from 'react-bootstrap'

const getVariant = (correctAnswer, index) =>
  parseInt(correctAnswer) === index ? "success" : "secondary"

const answerButton = (answer, index) =>
  <Row key={index}>
    <p>{index + 1}) {answer}</p>
  </Row>

class Question extends React.Component {
  render () {
    return (
      <div className="question-config">
        <Form >
          <FormGroup as={Row} controlId="formHorizontalDescription">
            <Form.Label column sm={2}>Descripion</Form.Label>
            <Col sm={9}><p>{this.props.question.description}</p></Col>
          </FormGroup>
          <FormGroup as={Row} controlId="formHorizontalAnswers">
            <Form.Label column sm={2}>Answers</Form.Label>
            <Col sm={9}>
              {this.props.question.answers
                .map((answer, index) => answerButton(answer,index))}
            </Col>
          </FormGroup>
          <FormGroup as={Row} controlId="formHorizontalTheme">
            <Form.Label column sm={2}>Theme</Form.Label>
            <Col sm={9}><p>{this.props.question.theme}</p></Col>
          </FormGroup>          
        </Form>
      </div>
    )
  }

  _handleDelete = () => {
  }
}

export default Question;