import React, { Component } from 'react';
import {AppProvider, AppConsumer, reducer} from '../app/context';
import {books, authors, categories} from '../app/db.json';
import {actions} from '../app/actions';
import Header from './layout/header/header';
import Layout from './layout/index';
import BookList from './books/bookList';
import { BrowserRouter } from "react-router-dom";
import './styles/index.css';
import 'antd/dist/antd.min.css'

class App extends Component {
  state = {
    books: [],
    authors: [],
    categories: [],
    router: {
      current: 'homepage',
      components: [],
    },
  };

  componentDidMount() {

    const actionsMap = Object.entries(actions)
      .reduce((accumlator, [name, action]) => {
        accumlator = {
          [name]: payload => this.setState(state => reducer(state, {type: name, payload}))
        }
        return accumlator;
      }, {});

    this.setState(() => ({
        books,
        authors,
        categories,
        actionsMap,
    }))
  }

  componentDidUpdate() {
    console.log('== this.state ==', this.state)
  }

  render() {
    return (
      <BrowserRouter>
        <AppProvider values={this.state}>
          <div className="App">
              <React.Fragment>
                <Header />
                <Layout/>
              </React.Fragment>
          </div>
        </AppProvider>
      </BrowserRouter>
      );
  }
}

export default App;
