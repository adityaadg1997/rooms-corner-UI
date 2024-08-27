import React, { useState } from 'react';
import axios from 'axios';

const PincodeAreaFetcher = () => {
  const [pincode, setPincode] = useState('');
  const [areaInfo, setAreaInfo] = useState('');
  const [error, setError] = useState('');

  const YOUR_OPENCAGE_API_KEY = '2550513373c141cd8d5666fe10ff459d';

  const fetchAreaByPincode = async () => {
    const apiKey = YOUR_OPENCAGE_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${pincode}&key=${apiKey}`;
    

    try {
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        setAreaInfo(response.data.results[0].formatted);
        setError('');
      } else {
        setAreaInfo('');
        setError('No results found for the given pincode.');
      }
    } catch (err) {
      setAreaInfo('');
      setError('Error fetching area information.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAreaByPincode();
  };

  return (
    <div>
      <h1>Pincode Area Fetcher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter pincode"
          required
        />
        <button type="submit">Fetch Area</button>
      </form>
      {areaInfo && <p>Area information: {areaInfo}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PincodeAreaFetcher;
