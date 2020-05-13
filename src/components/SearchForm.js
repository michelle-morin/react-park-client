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
    height: 'auto',
    minHeight: '18vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#111111',
    color: '#f5f5f5',
    paddingLeft: '15%',
    paddingRight: '15%'
  }

  const mainLabelStyles = {
    fontSize: '3rem',
  }

  return(
    <div style={formStyles}>
      <h2 style={mainLabelStyles}>Search Parks!</h2><br/>
      <Form onSubmit={handleSearch}>
        <Form.Control type="text" name="name" placeholder="Park Name"/><br/>
        <Form.Control type="text" name="location" placeholder="State" /><br/>
        <Button variant="outline-light" type="submit">SEARCH</Button>
      </Form>
    </div>
  );
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm;