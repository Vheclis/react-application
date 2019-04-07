import React from 'react';
import { Form, Col } from 'react-bootstrap'


class InputFieldDefault extends React.Component {

  state = {
    defaultValue: this.props.defaultValue,
    onChange: this.props.onChange,
    name: this.props.name,
    placeholder: this.props.placeholder,
    label: this.props.label,
  }

  render() {
    return (
      <Form.Group as={Col} controlId={"formGrid".concat(this.state.name)}>
        <Form.Label><h2>{this.state.label}</h2></Form.Label>
        <Form.Control
          defaultValue={this.state.defaultValue}
          onChange={this.state.onChange}
          name={this.state.name}
          placeholder={this.state.placeholder}
          required
        />
      </Form.Group>
    )
  }
}

export default InputFieldDefault;
