import { useState } from 'react';
import axios from 'axios';

// Custom hook for Axios requests
const useAxios = (baseUrl) => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Generic request function
  const request = async (method, endpoint, payload = null) => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    try {
      const response = await axios({
        method,
        url: `${baseUrl}/${endpoint}`,
        data: payload,
      });
      setData(response.data); // Save response data
      return response.data; // Return the data for immediate use
    } catch (err) {
      setError(err); // Save the error
      console.error(`Error with ${method.toUpperCase()} request to ${endpoint}:`, err);
      throw err; // Re-throw for further handling if needed
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Shortcut methods for specific HTTP verbs
  const get = (endpoint) => request('get', endpoint);
  const post = (endpoint, payload) => request('post', endpoint, payload);
  const patch = (endpoint, payload) => request('patch', endpoint, payload);
  const remove = (endpoint) => request('delete', endpoint);

  return {
    data,
    error,
    loading,
    get,
    post,
    patch,
    remove,
  };
};

export default useAxios;