import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./views/Contacts";
import Edit from "./views/Edit";
import Favourites from "./views/Favourites";

function App() {
  return (
    <Router>
      <div className='bg-blue-600 flex space-x-4 text-white p-4 justify-center'>
        <Link to='/'>Home</Link>
        <Link to='/favourites'>Favourites</Link>
      </div>
      <Routes>
        <Route path="/" element={ <Contact /> } />
        <Route path="/edit/:id" element={ <Edit /> } />
        <Route path="/favourites" element={ <Favourites /> } />
      </Routes>
    </Router>
  );
}

export default App;
