import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { Auth0Provider } from './react-auth0-wrapper';
require('dotenv').config();
//import config from './auth_config.json';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
//console.log(process.env.REACT_APP_AUTH0_DOMAIN);
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

//{process.env.REACT_APP_AUTH0_DOMAIN}
//{process.env.REACT_APP_AUTH0_CLIENT_ID}
