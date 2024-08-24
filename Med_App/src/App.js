import logo from './logo.svg';
import './App.css';
import { Component } from 'InstantConsultation';
import Component from 'BookingConsultation';

function App() {
  return (
    <> </>
  );
}

export default App;

// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Navbar.js, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Navbar/Navbar';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          </Routes>
          {/* Integrate existing component */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;