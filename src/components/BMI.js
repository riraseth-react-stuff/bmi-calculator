import React, { useState } from 'react';
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  const [bmiValue, setBmiValue] = useState(0);

  return (
    <React.Fragment>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-results-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass index (BMI) = {bmiValue}
            </div>
            <div className={`bmi-category`}>Overweight</div>
          </div>
        </div>
        <BmiCalculator getBmiValue={setBmiValue} />
      </div>
    </React.Fragment>
  );
};

export default BMI;
