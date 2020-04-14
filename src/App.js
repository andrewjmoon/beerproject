import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Brewery from './components/Brewery';
import SearchBrewery from './components/SearchBrewery';
import Home from './components/Home';
import Header from './components/Header';
import SearchBeer from './components/SearchBeer';
import About from './components/About';
import Resources from './components/Resources';
import Reviews from './components/Reviews';
import SearchStyles from './components/SearchStyles';
import Beer1 from './components/Beers/Beer1';
import Beer2 from './components/Beers/Beer2';
import Beer3 from './components/Beers/Beer3';
import Beer4 from './components/Beers/Beer4';
import Beer5 from './components/Beers/Beer5';
import Beer6 from './components/Beers/Beer6';
import Beer7 from './components/Beers/Beer7';
import Beer8 from './components/Beers/Beer8';
import Beer9 from './components/Beers/Beer9';
import Beer10 from './components/Beers/Beer10';
import Beer11 from './components/Beers/Beer11';
import Beer12 from './components/Beers/Beer12';
import Beer13 from './components/Beers/Beer13';
import Beer14 from './components/Beers/Beer14';
import Beer15 from './components/Beers/Beer15';
import Beer16 from './components/Beers/Beer16';
import Beer17 from './components/Beers/Beer17';
import Beer18 from './components/Beers/Beer18';
import Beer19 from './components/Beers/Beer19';
import BeerHome from './components/Beers/BeerHome';
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from './react-auth0-wrapper';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Router>
        <header>
          <Header />
        </header>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/brewery" component={Brewery} />
          <PrivateRoute path="/searchbrewery" component={SearchBrewery} />
          <PrivateRoute path="/searchbeer" component={SearchBeer} />
          <PrivateRoute path="/searchstyles" component={SearchStyles} />
          <PrivateRoute path="/resources" component={Resources} />
          <PrivateRoute path="/reviews" component={Reviews} />
          <PrivateRoute exact path="/beerhome" component={BeerHome} />
          <PrivateRoute exact path="/beerhome/beerpage1" component={Beer1} />
          <PrivateRoute exact path="/beerhome/beerpage2" component={Beer2} />
          <PrivateRoute exact path="/beerhome/beerpage3" component={Beer3} />
          <PrivateRoute exact path="/beerhome/beerpage4" component={Beer4} />
          <PrivateRoute exact path="/beerhome/beerpage5" component={Beer5} />
          <PrivateRoute exact path="/beerhome/beerpage6" component={Beer6} />
          <PrivateRoute exact path="/beerhome/beerpage7" component={Beer7} />
          <PrivateRoute exact path="/beerhome/beerpage8" component={Beer8} />
          <PrivateRoute exact path="/beerhome/beerpage9" component={Beer9} />
          <PrivateRoute exact path="/beerhome/beerpage10" component={Beer10} />
          <PrivateRoute exact path="/beerhome/beerpage11" component={Beer11} />
          <PrivateRoute exact path="/beerhome/beerpage12" component={Beer12} />
          <PrivateRoute exact path="/beerhome/beerpage13" component={Beer13} />
          <PrivateRoute exact path="/beerhome/beerpage14" component={Beer14} />
          <PrivateRoute exact path="/beerhome/beerpage15" component={Beer15} />
          <PrivateRoute exact path="/beerhome/beerpage16" component={Beer16} />
          <PrivateRoute exact path="/beerhome/beerpage17" component={Beer17} />
          <PrivateRoute exact path="/beerhome/beerpage18" component={Beer18} />
          <PrivateRoute exact path="/beerhome/beerpage19" component={Beer19} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
