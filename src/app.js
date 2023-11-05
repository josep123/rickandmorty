import React from 'react';
import Home from './pages/home';
import Character from './pages/character';
import CharacterList from './pages/character/list.js';
import Location from './pages/location'
import LocationList from './pages/location/list.js'
import Episode from './pages/episode'
import EpisodeList from './pages/episode/list.js'
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';
import Header from './components/header';


import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Container fluid className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterList />} />
        <Route path="/character/" element={<Character />} />
        <Route path="/location/:id" element={<LocationList />} />
        <Route path="/location/" element={<Location />} />
        <Route path="/episode/:id" element={<EpisodeList />} />
        <Route path="/episode/" element={<Episode />} />
      </Routes>

     
    </Container> <Footer />
</div>


  );
}

export default App;