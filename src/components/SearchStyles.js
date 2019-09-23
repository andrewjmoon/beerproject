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
const API_KEY = `${process.env.REACT_APP_BREWERYDB_API_KEY}`;

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const pageLimit = 20;
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/menu/styles/?key=${API_KEY}`
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
      <h1>Beer Styles</h1>
      <p>
        Note: If you would like more information about a particular category,
        please visit brewerydb.com
      </p>
      <>
        {currentItems.map(item => (
          <Card className={classes.bullet} key={item.id}>
            <CardContent>
              Styles: {item.name}
              {''}
              <br />
              Description: {item.description}
              {''}
              <br />
            </CardContent>
            <hr />
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

/*

*/
