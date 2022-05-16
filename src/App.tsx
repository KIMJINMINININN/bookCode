import React from 'react';
import GlobalStyle from './styles/global-styles';
import Root from './pages/Root';
import './App.css';
import { store } from './store/createStore'

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Root />
  </div>
);

export default App;
