import React from 'react';
import './Leagues.css'; // Import your CSS for styling

function Leagues() {
  return (
    <div className="container">
      <h1 className="text-center">Our Leagues</h1>
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
          <div className="card mb-4">
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
  );
}

export default Leagues;
