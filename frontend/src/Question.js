import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { withRouter, Redirect } from 'react-router-dom'
import { Form, FormGroup, Row, Col, Button } from 'react-bootstrap'
import DeleteQuestionMutation from './mutations/DeleteQuestionMutation'

const answerText = (answer, index) =>
  <Row key={index}>
    <p>{index + 1}) {answer}</p>
  </Row>

class Question extends React.Component {

  state = {
    shouldRedirect: false,
  }

  setRedirect = () => {
    this.setState({
      shouldRedirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.shouldRedirect) {
      return <Redirect to={{
        pathname: '/update',
        state: this.props.question
      }} />
    }
  }

  handleDeleteClick(_id) {
    DeleteQuestionMutation(_id, window.location.reload());
  }

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
                .map((answer, index) => answerText(answer,index))}
            </Col>
          </FormGroup>
          <FormGroup as={Row} controlId="formHorizontalTheme">
            <Form.Label column sm={2}>Theme</Form.Label>
            <Col sm={9}><p>{this.props.question.theme}</p></Col>
          </FormGroup>       
          <div>
          <Button
            variant="danger"
            className="button-config"
            onClick={() => this.handleDeleteClick(this.props.question._id)}
          >
            Delete
          </Button>
          {this.renderRedirect()}
          <Button
            variant="warning"
            className="button-config"
            onClick={this.setRedirect}
          >
            Update
          </Button>
          </div>   
        </Form>
      </div>
    )
  }

  _handleDelete = () => {
  }
}

export default withRouter(Question);