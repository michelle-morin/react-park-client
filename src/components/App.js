import React from 'react';
import ParkControl from './ParkControl';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <ParkControl/>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Michelle Morin, Drake Wilcox, Jamison Cozart, Brandan Sayarath" />
        <meta name="description" content="react application for interacting with .net webapi" />
        <meta name="description" content="explore national, state, and local parks" />
        <title>Park Finder</title>
      </Helmet>
    </div>
  );
}

export default App;