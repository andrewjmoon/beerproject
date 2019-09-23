import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
const API_KEY = `${process.env.REACT_APP_BREWERYDB_API_KEY}`;

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${API_KEY}&isOrganic=N&isRetired=N&abv=5-10&p=14`
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div className="Background">
      <h1>Beer Page 14</h1>
      <Link className="Link" to="/beerhome">
        <h2>BeerHome</h2>
      </Link>
      <ul>
        {items.map(item => (
          <p key={item.id}>
            <li>
              Beer: {item.name}
              {''}
              <br />
              Abv: {item.abv}
              {''}
              <br />
              Description: {item.description}
              {''}
              <br />
            </li>
          </p>
        ))}
      </ul>
    </div>
  );
};
