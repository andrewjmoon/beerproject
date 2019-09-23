import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

export default () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1 className="Link">Welcome to the Home Page</h1>
      <Link className="Link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="Link" to="/brewery">
        <h2>Breweries in Texas</h2>
      </Link>
      <Link className="Link" to="/searchbrewery">
        <h2>Search Breweries in the US</h2>
      </Link>
      <Link className="Link" to="/searchbeer">
        <h2>Brewdog Brewery Collection</h2>
      </Link>
      <Link className="Link" to="/beerhome">
        <h2>Beer Lists</h2>
      </Link>
      <Link className="Link" to="/searchstyles">
        <h2>Search Beer Styles</h2>
      </Link>
      <Link className="Link" to="/resources">
        <h2>Beer Resources</h2>
      </Link>
      <Link className="Link" to="/reviews">
        <h2>Reviews</h2>
      </Link>
    </div>
  );
};
