import React, { Fragment } from 'react';
import "./App.scss";
import RoutesIn from './routes';
import {Helmet} from "react-helmet"




const App = () => (
  <Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Your notes on the clouds!</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name='description' content='js notes'/>
      </Helmet>
      <RoutesIn/>
  </Fragment>
)


export default App;