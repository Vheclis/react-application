import React from 'react'
import './index.css'
import Question from './Question'
import { Container, Row, Col } from 'react-bootstrap'



class ListPage extends React.Component {

  getQuestions(props) {
    if (props.questions) {
      return props.questions.map((question) =>
        <Question key={question._id} question={question} />
      )
    }
    return <div>
      <h1>No Questions Found :'(</h1>
      <h2>Creat Some!</h2>
    </div>
  }

  render() {
    return (
      <Container className="container-config">
        <Row >
          <Col>
            {this.getQuestions(this.props)}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListPage