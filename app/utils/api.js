import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

const prepRouteParams = (queryStringData) => {
  return Object.keys(queryStringData)
  .map((key)=> (
    `${key}=${encodeURIComponent(queryStringData[key])}`
  )).join('&');
}
const prepUrl = (type, queryStringData) => (
  `${_baseURL}${type}?${prepRouteParams(queryStringData)}`
);
const getQueryStringData = (city) => ({
  q: city,
  type: 'accurate',
  APPID: _APIKEY,
  cnt: 5
});

const getCurrentWeather = (city) => {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then((currentWeatherData) => (currentWeatherData.data))
}

const getForeCast = (city) => {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then((forecastData) => (forecastData.data));
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForeCast: getForeCast
}
