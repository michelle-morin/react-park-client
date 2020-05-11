import React from 'react'
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class ParkControl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, parks } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return (
      <React.Fragment>
        <h1>Parks</h1>
        <ul>
        {parks.map((park, index) => 
          <li key={index}>
            <h3 key={index}>{park.name}</h3>
            <p>{park.state}</p>
          </li>
        )}
        </ul>
      </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    parks: state.parks,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(ParkControl);