import React from 'react';
import Zipcode from './Zipcode';
import Forecast from './Forecast';
import Detail from './Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h1>Clever Title</h1>
                <Zipcode
                  direction='row'
                  onSubmitZipcode={function(city){
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    });
                  }}
                  zipcode={123} />
              </div>
            )
          }} />

          <Route exact path='/' render={function (props) {
            return (
              <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className='header'>Enter a City and State</h1>
                <Zipcode
                  direction='column'
                  onSubmitZipcode={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                  zipcode={123} />
              </div>
            )
          }} />

          <Route path='/forecast' component={Forecast} />

          <Route path='/details/:city' component={Detail} />
        </div>
      </Router>
    )
  }
}

export default App;
