import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Park(props) {
  const cardStyles = {
    width: '30%',
    margin: '1%'
  }
  const { currentPark, handleDeletingPark } = props;

  let campsiteAvailability;
  if (currentPark.campsites) {
    campsiteAvailability = "Yes";
  } else {
    campsiteAvailability = "No";
  }
  
  return (
    <Card style={cardStyles}>
      <Card.Body>
        <Card.Title>{currentPark.name}</Card.Title>
        <Card.Text>
          <p>Location: {currentPark.state}</p>
          <p>Managed by: {currentPark.agency}</p>
          <p>Campsites? {campsiteAvailability}</p>
          <p>{currentPark.description}</p>
          <Button variant="outline-danger" onClick={()=> handleDeletingPark(currentPark.parkId)}>DELETE PARK</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Park.propTypes = {
  currentPark: PropTypes.object,
  key: PropTypes.number,
  handleDeletingPark: PropTypes.func
}

export default Park;