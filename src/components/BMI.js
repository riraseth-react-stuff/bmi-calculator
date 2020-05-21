import React from 'react';
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  return (
    <React.Fragment>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-results-container">
          <div className="bmi-result">
            <div className="bmi-result-number">Body Mass index (BMI) = 26</div>
            <div className={`bmi-category`}>Overweight</div>
          </div>
        </div>
        <BmiCalculator />
      </div>
    </React.Fragment>
  );
};

export default BMI;
