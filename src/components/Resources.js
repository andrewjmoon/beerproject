import React from 'react';

export default () => {
  return (
    <div className="Background">
      <h1>Resources for beer enthusiats</h1>
      <ul>
        <li>
          A map of Texas breweries by the Texas Craftbrewers Guild
          <a
            href="https://www.texascraftbrewersguild.org/map"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            Texas Brewery Map
          </a>
        </li>
        <li>
          Texas craftsbeer overview
          <a
            href="https://bigworldsmallgirl.com/best-texas-craft-beers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://bigworldsmallgirl.com/best-texas-craft-beers/
          </a>
        </li>
        <li>
          250 Top Ranked Beers
          <a
            href="https://www.beeradvocate.com/beer/top-rated/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://www.beeradvocate.com/beer/top-rated/
          </a>
        </li>
      </ul>
    </div>
  );
};
