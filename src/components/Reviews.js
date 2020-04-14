import React from 'react';
import YouTube from '@u-wave/react-youtube';

export default () => {
  return (
    <div className="Review">
      <h1>Reviews:</h1>
      <ul>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="F78OierQOl4"
            width="100%"
            height="100%"
          />
          <b>Sour Craft Beer Reviews</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="1QEJEb3BHtY"
            width="100%"
            height="20px"
          />
          <b>Texas Ale Reviews</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="iDR82qG5uzs"
            width="100%"
            height="100%"
          />
          <b>Experts guess cheap or expensive beers</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="Vcroqr6_Fvg"
            width="100%"
            height="100%"
          />
          <b>Shiner Beer Overview</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="K8eFm-jQ300"
            width="100%"
            height="100%"
          />
          <b>Karbach Beer Synopsis</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="7jGDafyL4rY"
            width="100%"
            height="100%"
          />
          <b>A review of the top beers in 2018</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="SXjUnisP2Yc"
            width="100%"
            height="100%"
          />
          <b>Mexican Beer Ranking</b>
        </li>
        <li>
          <YouTube
            style={{ height: '50vh' }}
            video="46wjGk7UTx4"
            width="100%"
            height="100%"
          />
          <b>Blind Testing of Cheap Beers</b>
        </li>
      </ul>
    </div>
  );
};
