import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </main>
    </div>
  )
}

export default App;