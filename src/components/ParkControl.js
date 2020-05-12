import React from 'react'
import ParkList from './ParkList';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import { Container, Button } from 'react-bootstrap';
import NewParkForm from './NewParkForm';

class ParkControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchLocation: null,
      searchName: null,
      newParkFormVisible: false
    }
  }

  handleClick = () => {
    if (this.state.newParkFormVisible) {
      this.setState({newParkFormVisible: false});
    } else {
      this.setState({newParkFormVisible: true});
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  onSearchSubmission = (searchObject) => {
    console.log('onSearchSubmission');
    const { name, location } = searchObject;
    let nameQuery = (name !== "") ? name : "";
    let locationQuery = (location !== "") ? location : "";
    this.setState({searched: true, searchLocation: locationQuery, searchName: nameQuery});
  }

  resetParkList = () => {
    this.setState({searched: false, searchLocation: null, searchName: null});
  }

  showButton = () => {
    return (this.state.searched) ? <Button variant="outline-dark" onClick={this.resetParkList}>SHOW ALL PARKS</Button> : null
  }

  handleAddingNewParkToDb = async (parkObj) => {
    await fetch('http://localhost:5000/api/parks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parkObj)
    });
    this.setState({newParkFormVisible: false});
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  handleParkDeletion = async (id) => {
    await fetch(`http://localhost:5000/api/parks/${id}`, {
      method: 'DELETE'
    })
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const parkControlStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      flex: '50%'
    }

    const containerStyles = {
      paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '2%',
      paddingRight: '2%'
    }

    const { error, isLoading, parks } = this.props;
    
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      let parkList;
      if (this.state.searchName !== null || this.state.searchLocation !== null) {
        parkList = parks.filter((park) => {
          return park.name.includes(this.state.searchName) && park.state.includes(this.state.searchLocation);
        });
      } else {
        parkList = parks;
      }

      let currentView;
      let buttonText;
      if (this.state.newParkFormVisible) {
        currentView = <NewParkForm onNewParkFormSubmission={this.handleAddingNewParkToDb} />
        buttonText = "return to park list";
      } else {
        currentView = (
          <div style={parkControlStyles}>
            <ParkList 
              parkList={parkList}
              handleDeletingPark = {this.handleParkDeletion} 
            />
            <div className="secondColumn">
              <SearchForm onSearchSubmission={this.onSearchSubmission} />
              {this.showButton()}
            </div>
          </div>
        );
        buttonText = "add new park";
      }

      return (
      <Container style={containerStyles}>
        <Button variant="outline-success" onClick={this.handleClick}>{buttonText}</Button>
        {currentView}
      </Container>
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