import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import InfoProvider from './components/contexts/UserContext.js';
import Navigation from './components/Navigation';


function App() {

  return (
    <InfoProvider>
      <Navigation />
    </InfoProvider>
  );
}


export default App;
