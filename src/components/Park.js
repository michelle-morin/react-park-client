import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSpring, animated as a } from 'react-spring';

function Park(props) {
  const { currentPark, handleDeletingPark, handleEditClick } = props;

  const [flipped, flipCard] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const cardStyles = {
    backgroundColor: '#111111',
    color: '#f5f5f5',
    width: '500px',
    height: '500px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    textAlign: 'center',
    boxShadow: '0 10px 10px 0 rgba(0,0,0,0.10)'
  }

  const frontCardStyles = {
    backgroundImage: `url(${currentPark.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '500px',
    height: '500px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    textAlign: 'center',
    boxShadow: '0 10px 10px 0 rgba(0,0,0,0.10)'
  }

  const outerDivStyles = {
    borderRadius: '10px',
    width: '500px',
    height: '500px',
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '0.5%'
  }

  const buttonStyles = {
    display: 'flex',
    justifyContent: "space-between"
  }

  const singleButton = {
    marginLeft: '2%',
    marginRight: '2%'
  }

  let campsiteAvailability;
  if (currentPark.campsites) {
    campsiteAvailability = "Yes";
  } else {
    campsiteAvailability = "No";
  }

  return (
    <div className="park-card" style={outerDivStyles} key={currentPark.parkId} onClick={() => flipCard(state => !state)}>
      <a.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <Card style={frontCardStyles}>
          <h1 className='parkTitle'>{currentPark.name}</h1>
        </Card>
      </a.div>

      <a.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <Card style={cardStyles}>
          <p>Location: {currentPark.state}</p>
          <p>Managed by: {currentPark.agency}</p>
          <p>Campsites? {campsiteAvailability}</p>
          <p>{currentPark.description}</p>
          <div style={buttonStyles}>
            <Button style={singleButton} variant="outline-danger" onClick={()=> handleDeletingPark(currentPark.parkId)}>DELETE</Button>
            <Button style={singleButton}variant="outline-warning" onClick={()=> handleEditClick(currentPark)}>EDIT</Button>
          </div>
        </Card>
      </a.div>
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