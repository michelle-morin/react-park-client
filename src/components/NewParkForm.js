import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function NewParkForm(props) {
  const addNewPark = (event) => {
    event.preventDefault();
    props.onNewParkFormSubmission({
      name: event.target.name.value,
      state: event.target.location.value,
      agency: event.target.agency.value,
      description: event.target.description.value,
      campsites: event.target.campsites.value,
      imgUrl: event.target.imgUrl.value
    });
  }
  return (
    <Form onSubmit={addNewPark}>
      <Form.Group>
        <Form.Label>Park Name:</Form.Label>
        <Form.Control type="text" name="name" required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>State where park is located:</Form.Label>
        <Form.Control type="text" name="location" required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Agency that manages the park:</Form.Label>
        <Form.Control type="text" name="agency" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" name="description" required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Campsite Availability:</Form.Label>
        <label>Yes</label>
        <input type="radio" name="campsites" value="true" checked required/>
        <label>No</label>
        <input type="radio" name="campsites" value="false" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL:</Form.Label>
        <Form.Control type="text" name="imgUrl" defaultValue={currentPark.imgUrl} />
      </Form.Group>
      <Button variant="outline-dark" type="submit">ADD PARK</Button>
    </Form>
  );
}

NewParkForm.propTypes = {
  onNewParkFormSubmission: PropTypes.func
}