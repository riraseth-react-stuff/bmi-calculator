import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const BmiCalculator = ({ getBmiValue }) => {
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('Metric');
  const [count, setCount] = useState({
    heightCount: '0',
    inchesCount: '0',
    weightCount: '0',
  });

  // const [count, setCount] = useState({
  //   data: {
  //     heightCount: '0',
  //     inchesCount: '0',
  //     weightCount: '0',
  //   },
  // });

  // const { heightCount, inchesCount, weightCount } = count.data;
  const { heightCount, inchesCount, weightCount } = count;

  useEffect(() => {
    metricBMI(heightCount, weightCount);
    imperialBMI(heightCount, weightCount, inchesCount);

    //eslint-disable-next-line
  }, [heightCount, weightCount]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setCount((prevState) => ({ ...prevState, [name]: value }));
    // const { data } = count;
    // setCount({
    //   data: {
    //     ...data,
    //     [name]: value,
    //   },
    // });
  };
  const onSelectTag = (e) => {
    setUnit(e.target.value);
    if (e.target.value === 'Metric') {
      setHeightUnit('cm');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lb');
    }
    setCount({ heightCount: '0', inchesCount: '0', weightCount: '0' });
    getBmiValue(0);
  };

  const resetData = (e) => {
    e.preventDefault();
    setUnit('Metric');
    setCount({ heightCount: '0', inchesCount: '0', weightCount: '0' });
    setHeightUnit('cm');
    setWeightUnit('kg');
    getBmiValue(0);
  };

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / Math.pow(heightInMeters, 2);
      getBmiValue(Math.round(bmi));
    }
  };

  const imperialBMI = (height, weight, inches) => {
    if (height > 0 && weight > 0 && inches > 0) {
      // convert feet to inches
      // add inches to the converted value
      const heightToInches = height * 12 + parseInt(inches);
      const bmi = 703 * (weight / Math.pow(heightToInches, 2));
      getBmiValue(Math.round(bmi));
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
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === 'Imperial' ? (
            <FormInput
              type="text"
              name="inchesCount"
              title={`(in)`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          ) : null}
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit" onClick={resetData}>
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

BmiCalculator.propTypes = {
  getBmiValue: PropTypes.func.isRequired,
};

export default BmiCalculator;
