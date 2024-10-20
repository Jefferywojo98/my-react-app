import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css'; // Your custom styles
import Leagues from './Leagues'; // Import the Leagues component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Ascend Esports League</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/leagues">Leagues</a> {/* Link to the Leagues page */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <header className="bg-primary text-white text-center py-5">
                <div className="container">
                  <h1 className="display-4">Welcome to Ascend Esports League</h1>
                  <p className="lead">Join the most exciting esports competitions!</p>
                  <a href="/leagues" className="btn btn-light btn-lg">Learn More</a> {/* Button linking to the leagues */}
                </div>
              </header>

              {/* Leagues Section */}
              <section id="leagues" className="py-5">
                <div className="container">
                  <h2 className="text-center">Our Leagues</h2>
                  <div className="row">
                    {/* Phoenix League */}
                    <div className="col-md-4">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">Phoenix League</h5>
                          <p className="card-text">For players above Diamond rank.</p>
                        </div>
                      </div>
                    </div>
                    {/* Huma League */}
                    <div className="col-md-4">
                      <div className="card mb-4">l
                        <div className="card-body">
                          <h5 className="card-title">Huma League</h5>
                          <p className="card-text">For Gold, Platinum, and Diamond players.</p>
                        </div>
                      </div>
                    </div>
                    {/* Thunderbird League */}
                    <div className="col-md-4">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">Thunderbird League</h5>
                          <p className="card-text">For Iron, Bronze, and Silver players.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/leagues" element={<Leagues />} /> {/* Route for the Leagues page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
