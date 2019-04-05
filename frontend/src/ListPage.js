import React from 'react'
import './index.css'
import Question from './Question'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

class ListPage extends React.Component {

  render () {
    return (
        <Container className="container-config">
          <Row >
            <Col>
              {this.props.questions.map((question) => 
                <Question key={question._id} question={question}/>
              )}
            </Col>
          </Row>
        </Container>
    )
  }
}

export default ListPage