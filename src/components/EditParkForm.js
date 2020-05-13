import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function EditParkForm(props) {
  const { currentPark, onEditFormSubmission } = props;

  const textareaStyles = {
    display: 'block',
    width: '100%',
    borderRadius: '5px'
  }

  const inputStyle = {
    color: '#111111'
  }

  const editPark = (event) => {
    event.preventDefault();
    const updatedParkValues = {
      parkId: props.currentPark.parkId,
      name: event.target.name.value,
      state: event.target.location.value,
      agency: event.target.agency.value,
      description: event.target.description.value,
      campsites: event.target.campsites.value,
      imgUrl: event.target.imgUrl.value
    };
    onEditFormSubmission(updatedParkValues);
  }

  return (
    <Form onSubmit={editPark}>
      <Form.Group>
        <Form.Label>Park Name:</Form.Label>
        <Form.Control style={inputStyle} type="text" name="name" defaultValue={currentPark.name} />
      </Form.Group>
      <Form.Group>
        <Form.Label>State where park is located:</Form.Label>
        <Form.Control style={inputStyle} type="text" name="location" defaultValue={currentPark.state} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Agency that manages the park:</Form.Label>
        <Form.Control style={inputStyle} type="text" name="agency" defaultValue={currentPark.agency}  />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <textarea style={textareaStyles} type="text" name="description" defaultValue={currentPark.description} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Campsite Availability:</Form.Label>
        <label>Yes</label>
        <input type="radio" name="campsites" value="true" />
        <label>No</label>
        <input type="radio" name="campsites" value="false" checked />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL:</Form.Label>
        <Form.Control style={inputStyle} type="text" name="imgUrl" defaultValue={currentPark.imgUrl} />
      </Form.Group>
      <Button variant="outline-dark" type="submit">SAVE CHANGES</Button>
    </Form>
  );
}

EditParkForm.propTypes = {
  currentPark: PropTypes.object,
  onEditFormSubmission: PropTypes.func
}