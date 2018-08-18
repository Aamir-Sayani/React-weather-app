import React from 'react';
import PropTypes from 'prop-types';

class ZipCode extends React.Component {
  constructor(props){
    super(props);

    this.state={
      zipcode:""
    };
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
  }

  handleSubmitZipcode () {
    this.props.onSubmitZipcode(this.state.zipcode)

    this.setState(function () {
      return {
        zipcode: ''
      }
    })
  }

  handleUpdateZipcode (e) {
    var zip = e.target.value;
    this.setState(function () {
      return {
        zipcode: zip
      }
    });
  }

  render() {
    return(
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          type="text"
          placeholder='St. George, Utah'
          onChange={this.handleUpdateZipcode}
          value={this.state.zipcode}/>
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
          Get Weather
        </button>

      </div>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
  direction: PropTypes.string
}

export default ZipCode;
