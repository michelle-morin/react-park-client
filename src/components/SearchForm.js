import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SearchForm(props) {

  function handleSearch(event) {
    event.preventDefault();
    props.onSearchSubmission({
      name: event.target.name.value,
      location: event.target.location.value
    });
  }

  return(
    <React.Fragment>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Label>Park Name:</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Park Location (state):</Form.Label>
          <Form.Control type="text" name="location" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">SEARCH</Button>
      </Form>
    </React.Fragment>
  );
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm;