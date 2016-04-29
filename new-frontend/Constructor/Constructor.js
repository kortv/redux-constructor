import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ConstructorApp from './containers/ConstructorApp';
import { fetchUsers } from './actions';
import './SCSS/main.scss';


export default class Constructor extends Component {

  componentDidMount() {
    store.dispatch(fetchUsers(store));
  }

  render() {
    return (
      <Provider store={store}>
        <ConstructorApp store={store} />
      </Provider>
    );
  }
}
