import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class DatePick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  }
  render() {
    return (<DatePicker
      locale='Ru'
      dateFormat='DD.MM.YYYY'
      selected={this.state.startDate}
      onChange={this.handleChange}
    />);
  }
}
