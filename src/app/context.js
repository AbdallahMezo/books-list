// This is a replacement for redux, In this assessment I see that using React context is better
// than redux for handling the reusable data and actions
// also to practice it as I never used it before :D
// @ https://reactjs.org/docs/context.html

import React from 'react';
import {Component, createContext} from 'react'
import {actions} from './actions';

const Context = createContext();
const {Provider, Consumer} = Context;

const reducer = (state, {type, payload}) => actions[type] ? actions[type](state, payload) : state

class AppProvider extends Component {

  render(){
    return (
      <Provider value={{
          state: this.props.values,
          actions
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

class AppConsumer extends Component {
  render() {
    return (
      <Consumer>
        {this.props.children}
      </Consumer>
    )
  }
}

export  {
  reducer,
  AppProvider,
  AppConsumer
};
