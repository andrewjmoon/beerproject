import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Background"> 
      <h1>List of beers from the BreweryDB API</h1>
      <p>
        Note: these results are not definative, while some lack descriptions.
        There are also duplicate beers in the lists. If you would like more
        information about a particular beer, please do an online search.
      </p>
      <Link to="/beerhome/beerpage1"> Beer Page 1 </Link>
      <br />
      <Link to="/beerhome/beerpage2">Beer Page 2</Link>
      <br />
      <Link to="/beerhome/beerpage3">Beer Page 3</Link>
      <br />
      <Link to="/beerhome/beerpage4">Beer Page 4</Link>
      <br />
      <Link to="/beerhome/beerpage5">Beer Page 5</Link>
      <br />
      <Link to="/beerhome/beerpage6">Beer Page 6</Link>
      <br />
      <Link to="/beerhome/beerpage7">Beer Page 7</Link>
      <br />
      <Link to="/beerhome/beerpage8">Beer Page 8</Link>
      <br />
      <Link to="/beerhome/beerpage9">Beer Page 9</Link>
      <br />
      <Link to="/beerhome/beerpage10">Beer Page 10</Link>
      <br />
      <Link to="/beerhome/beerpage11">Beer Page 11</Link>
      <br />
      <Link to="/beerhome/beerpage12">Beer Page 12</Link>
      <br />
      <Link to="/beerhome/beerpage13">Beer Page 13</Link>
      <br />
      <Link to="/beerhome/beerpage14">Beer Page 14</Link>
      <br />
      <Link to="/beerhome/beerpage15">Beer Page 15</Link>
      <br />
      <Link to="/beerhome/beerpage16">Beer Page 16</Link>
      <br />
      <Link to="/beerhome/beerpage17">Beer Page 17</Link>
      <br />
      <Link to="/beerhome/beerpage18">Beer Page 18</Link>
      <br />
      <Link to="/beerhome/beerpage19">Beer Page 19</Link>
    </div>
  );
};
