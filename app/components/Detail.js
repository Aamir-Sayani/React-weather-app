import React from 'react';
import DayItem from './DayItem';
var convertTemp = require('../utils/helpers').convertTemp;

class Detail extends React.Component {

  render() {
    let props = this.props.location.state;
    return (
      <div>
        <DayItem day={props} />
        <div className='description-container'>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {convertTemp(props.temp.min)} degrees Fahrenheit</p>
          <p>max temp: {convertTemp(props.temp.max)} degrees Fahrenheit</p>
          <p>humidity: {props.humidity}</p>
        </div>
      </div>
    )
  }
}

export default Detail;
