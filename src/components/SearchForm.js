import React from 'react';
import { Form, Button, Navbar, Container } from 'react-bootstrap';
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
    color: '#f5f5f5'
  }

  const mainStyles = {
    fontSize: '2rem',
  }

  return(
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" style={formStyles}>
      <Navbar.Brand style={mainStyles}>Park Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="ml-auto" onSubmit={handleSearch}>
          <Form.Control type="text" name="name" placeholder="Park Name"/><br/>
          <Form.Control type="text" name="location" placeholder="State" /><br/>
          <Button variant="outline-light" type="submit">SEARCH</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm;