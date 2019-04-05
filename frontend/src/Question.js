import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Row, Col, Button } from 'react-bootstrap'
import DeleteQuestionMutation from './mutations/DeleteQuestionMutation'

const answerButton = (answer, index) =>
  <Row key={index}>
    <p>{index + 1}) {answer}</p>
  </Row>

class Question extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDeleteClick = this
      .handleDeleteClick.bind(this, this.props.question._id);
    this.handleUpdateClick = this
      .handleUpdateClick.bind(this, this.props.question._id);
    this.state = {
      isDeleteLoading: false,
      isUpdateLoading: false,
    }
  }
  handleDeleteClick(_id) {
    this.setState({ isDeleteLoading: true }, () => {
      DeleteQuestionMutation(_id, window.location.reload())
      this.setState({ isDeleteLoading: false });
    });
  }
  handleUpdateClick(_id) {
    this.setState({ isUpdateLoading: true }, () => {
      console.log("clicou " + _id)
      this.setState({ isUpdateLoading: false });
    });
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
                .map((answer, index) => answerButton(answer,index))}
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
            disabled={this.state.isDeleteLoading}
            onClick={!this.state.isDeleteLoading ? this.handleDeleteClick : null}
          >
            {this.state.isDeleteLoading ? 'Loading…' : 'Delete'}
          </Button>
          <Button
            variant="warning"
            className="button-config"
            disabled={this.state.isUpdateLoading}
            onClick={!this.state.isUpdateLoading ? this.handleUpdateClick : null}
          >
            {this.state.isUpdateLoading ? 'Loading…' : 'Update'}
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