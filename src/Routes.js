import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import App from './App';
import Assinatura from './pages/Assinatura';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/Assinatura" element={<Assinatura />} />
      </Switch>
    </BrowserRouter>
  );
}
