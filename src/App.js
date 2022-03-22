import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import SimpleExample from './components/simple';
import Leaflet from 'leaflet';
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

function App() {
  return <SimpleExample />;
}

export default App;
