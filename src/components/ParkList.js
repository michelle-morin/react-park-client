import React from 'react';
import Park from './Park';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ParkList(props) {

  const parkListStyles = {
    position: 'relative',
    top: '15vh',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  };

  const reusedButton = {
    height: '500px',
    width: '500px',
    boxShadow: '0 10px 10px 0 rgba(0,0,0,0.10)',
    marginTop: '1%',
    marginBottom: '1%',
    borderRadius: '10px'
  };

  const innerButtonStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    color: '#111111',
    border: '2px solid #111111',
    fontSize: '2.5rem',
    borderRadius: '10px'
  };

  return (
    <div style={parkListStyles}>
      <Card className="reused-button" style={reusedButton}>
        <Button style={innerButtonStyle} onClick={() => props.handleClick()}>ADD NEW PARK</Button>
      </Card>
      {props.parkList.map((park, index) => 
        <Park key={index} currentPark={park} handleDeletingPark={props.handleDeletingPark} handleEditClick={props.onEditClick} />
      )}
    </div>
  );
}

ParkList.propTypes = {
  parkList: PropTypes.array,
  handleDeletingPark: PropTypes.func,
  onEditClick: PropTypes.func,
  handleClick: PropTypes.func
}

export default ParkList;