import React from 'react';
import Park from './Park';
import PropTypes from 'prop-types';

function ParkList(props) {

  const parkListStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  };

  return (
    <div style={parkListStyles}>
      {props.parkList.map((park, index) => 
        <Park key={index} currentPark={park} />
      )}
    </div>
  );
}

ParkList.propTypes = {
  parkList: PropTypes.array
}

export default ParkList;