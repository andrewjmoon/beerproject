import React, { useState, useEffect } from 'react';
import Pagination from 'react-hooks-paginator';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    margin: '0 2px',
    transform: 'scale(0.8)',
    fontSize: 20
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default () => {
  const classes = useStyles();
  const pageLimit = 20;
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  useEffect(() => {
    fetchItems();
  }, [search]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${query}`
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
    setSearch('');
  };

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div className="Background">
      <h1>Search Breweries in the U.S.</h1>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <>
        {currentItems.map(item => (
          <Card className={classes.bullet} key={item.id}>
            <CardContent>
              Brewery Name: {item.name}
              {''}
              <br />
              Brewery Type: {item.brewery_type}
              {''}
              <br />
              Address: {item.street}-{item.city}-{item.state}
              {''}
              <br />
              Map Link:{' '}
              <a
                href={`http://maps.google.com/?q=${item.street}, ${item.city}, ${item.state}, ${item.postal_code}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click_Link_Address
              </a>
              <br />
              Website:{' '}
              <a
                href={item.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.website_url}
              </a>
            </CardContent>
          </Card>
        ))}
      </>
      <Pagination
        totalRecords={items.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
