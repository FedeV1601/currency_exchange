import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePage} from '../components/HomePage/HomePage';
import {Credits} from '../components/Credits/Credits';
import React from 'react';

export const Router = ()=>
{


return(

    <BrowserRouter>
    <Switch>
      <Route path="/credits">
        <Credits />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>

    </Switch>
  </BrowserRouter>

)};