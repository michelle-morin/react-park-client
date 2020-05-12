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

  const formStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '18vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
    color: '#f5f5f5'
  }

  const labelStyles = {
    marginLeft: '2%',
    marginRight: '1%',
    fontSize: '1.5rem'
  }

  const mainLabelStyles = {
    marginLeft: '2%',
    fontSize: '3rem'
  }

  return(
    <Form style={formStyles} onSubmit={handleSearch}>
      <Form.Label style={mainLabelStyles}>Search for a park!</Form.Label>
      <Form.Label style={labelStyles}>Park Name:</Form.Label>
      <input type="text" name="name" />
      <Form.Label style={labelStyles}>Park Location (state):</Form.Label>
      <input type="text" name="location" />
      <Button style={labelStyles} variant="outline-light" type="submit">SEARCH</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm;