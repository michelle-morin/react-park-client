import React from 'react'
import { connect } from 'react-redux';

class ParkControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      parks: []
    };
  }

  makeApiCall = () => {
    fetch("http://localhost:5000/api/Parks")
    .then(response => response.json())
    .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          if (jsonifiedResponse.status === 200 && jsonifiedResponse.ok) {
            this.setState({
              isLoaded: true,
              parks: jsonifiedResponse.results
            });
          } else {
            return false;
          }
        })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    const { error, isLoaded, parks } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return (
      <React.Fragment>
        <h1>Park Control</h1>
        {parks.map((park, index) => 
          <div key={index}>
            <h3>{park.name}</h3>
            <ul>
              <li>{park.state}</li>
            </ul>
          </div>
        )}
      </React.Fragment>
      )

    }
  }
}

export default ParkControl