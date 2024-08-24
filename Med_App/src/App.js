import logo from './logo.svg';
import './App.css';
import { Component } from 'InstantConsultation';
import Component from 'BookingConsultation';
import Component from 'App.js';
import Component from 'ReviewForm';

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
        <Notification>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                 <Route path="<component_route>" element={<component_name/>}/> //Replace the component_route with the component path and component_name with the component name as imported in the App.js file. 
                />
              </Routes>
          </Notification>
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