import * as c from './ActionTypes';

export const requestParks = () => ({
  type: c.REQUEST_PARKS
});

export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch("http://localhost:5000/api/Parks")
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getParksSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}

// export const postPark = (park) => ({
//   type: c.POST_PARK,
//   name: park.name,
//   state: park.state,
//   agency: park.agency,
//   campsites: park.campsites,
//   description: park.description
// });

// export const makeApiPostCall = (park) => {
//   return dispatch => {
//     dispatch(postPark(park));
//     return fetch('http://localhost:5000/api/parks', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(park)
//     })
//   }
// }