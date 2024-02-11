// src/actions.js

export const fetchData = () => {
  // Implement your logic to fetch data from an API or wherever your data resides
  return async dispatch => {
    try {
      // Example API call
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_ERROR', error: error.message });
    }
  };
};
