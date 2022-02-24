import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { WeatherPage } from './pages/WeatherPage'
import {Navbar } from './cmps/Navbar'
import {Favorites} from './pages/Favorites'




export function App() {
  return (
    <div className="App main-container" >
      <Navbar/>
      <Switch>
        <Route component={Favorites} path='/favorite' />
        <Route component={WeatherPage} path='/' />
     
      </Switch>
    </div>
  );
}

export default App;
