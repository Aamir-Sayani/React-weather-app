import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import utils from '../utils/helpers';
let getDate = utils.getDate;
let convertTemp = utils.convertTemp;
import DayItem from './DayItem'

class Forecast extends React.Component {
  constructor(props){
    super(props);

    this.state={
      loading: true,
      forecastData: []
    };
    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  makeRequest(city) {
    this.setState(function () {
     return {
       loading: true
     }
   })

   api.getForeCast(city)
     .then(function (res) {
       this.setState(function () {
         return {
           loading: false,
           forecastData: res,
         }
       })
     }.bind(this))
  }

  handleClick(city) {
    city.city = this.city
  this.props.history.push({
    pathname: '/details/' + this.city,
    state: city,
  })
}

  render() {
    console.log(this.state)
    return (
       this.state.loading === true
         ? <h1 className='forecast-header'> Loading </h1>
         : <div>
             <h1 className='forecast-header'>{this.city}</h1>
             <div className='forecast-container'>
               {this.state.forecastData.list.map(function (listItem) {
                 console.log(listItem)
                 return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
               }, this)}
             </div>
           </div>
    )
  }
}

export default Forecast;
