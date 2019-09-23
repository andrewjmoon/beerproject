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
  useEffect(() => {
    fetchItems();
  }, []);

  const pageLimit = 20;
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.punkapi.com/v2/beers?page=2&per_page=80'
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div className="Background">
      <>
        {currentItems.map(item => (
          <Card className={classes.bullet} key={item.id}>
            <CardContent>
              Beer Name: {item.name}
              {''}
              <br />
              Brewery Type: {item.tagline}
              {''}
              <br />
              Description: {item.description}
              {''}
              <br />
              Description: {item.description}
              {''}
              <br />
              ABV: {item.abv}
              {''}
              <br />
              <img className='Center' src={item.image_url} alt="" width="100" />
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
