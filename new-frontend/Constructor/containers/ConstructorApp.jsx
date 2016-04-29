import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainData from './../components/MainData';
import MyNavbar from './../components/comp-templates/MyNavbar';
// import Modal from './../components/Modal';

import * as actions from './../actions';

// import './SCSS/main.scss';
// import edit from './events/edit';
// import pullUp from './events/pullUp';
// import getData from './events/getData';
// import sendData from './events/sendData';
// import del from './events/del';
// import add from './events/add';
// import handleChange from './events/handleChange';
// import handleClick from './events/handleClick';

class ConstructorApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    // this.edit = edit.bind(this);
    // this.pullUp = pullUp.bind(this);
    // this.getData = getData.bind(this);
    // this.sendData = sendData.bind(this);
    // this.del = del.bind(this);
    // this.add = add.bind(this);
    // this.handleChange = handleChange.bind(this);
    // this.handleClick = handleClick.bind(this);
  }

  componentDidMount = () => {
    // this.getData('/constructor.json');
  }

  render() {
    const state = this.store.getState();
    return (
      <div>
        <div className='main-container'>
          <MyNavbar />
          <MainData
            klass='main-container' handleClick={this.handleClick} user={state.userData}
          />
        </div>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <div className='main-container'>
  //         <MyNavbar handleClick={this.handleClick} />
  //         <MainData
  //           klass='main-container' handleClick={this.handleClick} user={this.state.userData}
  //         />
  //       </div>
  //       <Modal data={this.state.modalData} handleChange={this.handleChange} />
  //     </div>
  //   );
  // }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(ConstructorApp);
