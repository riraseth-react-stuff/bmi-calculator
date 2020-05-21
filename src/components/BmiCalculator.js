import React from 'react';

const BmiCalculator = () => {
  return (
    <React.Fragment>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                value=""
                className="form-control form-control-sm"
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <input type="text" />
        </div>
        <button className="button" type="submit">
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default BmiCalculator;
