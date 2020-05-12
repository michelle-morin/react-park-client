import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Park(props) {
  const cardStyles = {
    width: '30%',
    margin: '1%'
  }

  const buttonStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const { currentPark, handleDeletingPark, handleEditClick } = props;

  // const parkToEdit = {
  //   parkId: currentPark.parkId,
  //   agency: currentPark.agency,
  //   description: currentPark.description,
  //   campsites: currentPark.campsites,
  //   name: currentPark.name,
  //   state: currentPark.state
  // };

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
          <div style={buttonStyles}>
            <Button variant="outline-danger" onClick={()=> handleDeletingPark(currentPark.parkId)}>DELETE</Button>
            <Button variant="outline-warning" onClick={()=> handleEditClick(currentPark)}>EDIT</Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Park.propTypes = {
  currentPark: PropTypes.object,
  key: PropTypes.number,
  handleDeletingPark: PropTypes.func,
  handleEditClick: PropTypes.func
}

export default Park;