import React, { Component } from 'react';
import { render } from 'react-dom';
import config from './config';
import ListBlock from './components/ListBlock';
import DetailPersonBlock from './components/DetailPersonBlock';

import './style.css';

import dane from './data/data';

type DPersonState = IPerson | null;
type AppProps  = { }
type AppState = {
  persons: Array<IPerson>,
  choosenPerson: DPersonState
}

class App extends Component<AppProps, AppState> {

  constructor(props) {
    super(props);    
    this.state = {
      persons: dane,
      choosenPerson: null
    };
    this.clickDetailsHandler = this.clickDetailsHandler.bind(this);
    this.clickListHandler = this.clickListHandler.bind(this);
  }

  clickDetailsHandler(e) {
    this.setState(state => {
      return {
        choosenPerson:null
      }
    });
  }

  clickListHandler(e) {
    const choosenId = parseInt(e.currentTarget.dataset.id);
    const person = this.state.persons.filter(person => person.id === choosenId).pop();
    this.setState(state => {
      return {
        choosenPerson:person
      }
    });    
  }


  render() {
    return (
      <div>
        {!this.state.choosenPerson && <ListBlock persons={dane} onClick={this.clickListHandler}/>}
        {this.state.choosenPerson &&<DetailPersonBlock person={this.state.choosenPerson} onClick={this.clickDetailsHandler}/>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
