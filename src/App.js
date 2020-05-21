import React from 'react';
import './App.css';
import BMI from './components/BMI';

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <BMI></BMI>
        </div>
      </div>
    </div>
  );
}

export default App;
