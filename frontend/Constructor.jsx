import React, { Component } from 'react';
import MainData from './components/MainData';
import MyNavbar from './comp-templates/MyNavbar';
import Modal from './components/Modal';
import './SCSS/main.scss';
import edit from './events/edit';
import pullUp from './events/pullUp';
import getData from './events/getData';
import sendData from './events/sendData';
import del from './events/del';
import add from './events/add';
import handleChange from './events/handleChange';
import handleClick from './events/handleClick';

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    this.edit = edit.bind(this);
    this.pullUp = pullUp.bind(this);
    this.getData = getData.bind(this);
    this.sendData = sendData.bind(this);
    this.del = del.bind(this);
    this.add = add.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleClick = handleClick.bind(this);
    this.state = {
      userData: [],
      modalData: {},
    };
  }

  componentDidMount = () => {
    this.getData('/constructor.json');
  }

  render() {
    return (
      <div>
        <div className='main-container'>
          <MyNavbar handleClick={ this.handleClick } />
          <MainData  klass='main-container'
            handleClick={ this.handleClick } user={ this.state.userData }
          />
        </div>
        <Modal data={ this.state.modalData } handleChange={ this.handleChange } />
      </div>
    );
  }
}