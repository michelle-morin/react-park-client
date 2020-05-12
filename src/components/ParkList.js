import React from 'react';
import Park from './Park';
import PropTypes from 'prop-types';

function ParkList(props) {

  const parkListStyles = {
    position: 'relative',
    top: '10vh',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  };

  return (
    <div style={parkListStyles}>
      {props.parkList.map((park, index) => 
        <Park key={index} currentPark={park} handleDeletingPark={props.handleDeletingPark} handleEditClick={props.onEditClick} />
      )}
    </div>
  );
}

ParkList.propTypes = {
  parkList: PropTypes.array,
  handleDeletingPark: PropTypes.func,
  onEditClick: PropTypes.func
}

export default ParkList;