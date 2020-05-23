import React, { useState } from 'react';
import FormInput from './FormInput';

const BmiCalculator = () => {
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('Metric');

  const onChangeInput = (e) => {};
  const onSelectTag = (e) => {
    setUnit(e.target.value);
    if (e.target.value === 'Metric') {
      setHeightUnit('cm');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lb');
    }
  };

  return (
    <React.Fragment>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                value={unit}
                onChange={onSelectTag}
                className="form-control form-control-sm"
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value=""
            onChange={onChangeInput}
          />
          {unit === 'Imperial' ? (
            <FormInput
              type="text"
              name="inchesCount"
              title={`(in)`}
              value=""
              onChange={onChangeInput}
            />
          ) : null}
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value=""
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit">
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default BmiCalculator;
