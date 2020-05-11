import React from 'react';
import PropTypes from 'prop-types';

function ParkList(props) {
  return (
    <React.Fragment>
      <ul>
      {props.parkList.map((park, index) => 
        <li key={index}>
          <h3 key={index}>{park.name}</h3>
          <p>{park.state}</p>
        </li>
      )}
      </ul>
    </React.Fragment>
  );
}

ParkList.propTypes = {
  parkList: PropTypes.array
}

export default ParkList;