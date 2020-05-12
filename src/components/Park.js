import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSpring, animated as a } from 'react-spring';

function Park(props) {

  const [flipped, flipCard] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const cardStyles = {
    width: '500px',
    height: '500px',
    margin: '1%',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
  }

  const buttonStyles = {
    display: 'flex',
    justifyContent: "space-between"
  }

  const { currentPark, handleDeletingPark, handleEditClick } = props;

  let campsiteAvailability;
  if (currentPark.campsites) {
    campsiteAvailability = "Yes";
  } else {
    campsiteAvailability = "No";
  }

  return (
    <div key={currentPark.parkId} onClick={() => flipCard(state => !state)}>
        <a.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          <Card style={cardStyles}>
            <h1>{currentPark.name}</h1>
          </Card>
        </a.div>

        <a.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
          <Card style={cardStyles}>
            <p>Location: {currentPark.state}</p>
            <p>Managed by: {currentPark.agency}</p>
            <p>Campsites? {campsiteAvailability}</p>
            <p>{currentPark.description}</p>
            <div style={buttonStyles}>
              <Button variant="outline-danger" onClick={()=> handleDeletingPark(currentPark.parkId)}>DELETE</Button>
              <Button variant="outline-warning" onClick={()=> handleEditClick(currentPark)}>EDIT</Button>
            </div>
          </Card>
        </a.div>
        {/* <Card.Title>{currentPark.name}</Card.Title>
        <Card.Text>
          <p>Location: {currentPark.state}</p>
          <p>Managed by: {currentPark.agency}</p>
          <p>Campsites? {campsiteAvailability}</p>
          <p>{currentPark.description}</p>
          <div style={buttonStyles}>
            <Button variant="outline-danger" onClick={()=> handleDeletingPark(currentPark.parkId)}>DELETE</Button>
            <Button variant="outline-warning" onClick={()=> handleEditClick(currentPark)}>EDIT</Button>
          </div>
        </Card.Text> */}
    </div>
  );
}

Park.propTypes = {
  currentPark: PropTypes.object,
  key: PropTypes.number,
  handleDeletingPark: PropTypes.func,
  handleEditClick: PropTypes.func
}

export default Park;