import React, { Component } from 'react';
import Activities from './components/Activities';
import ActivityStore from './stores/ActivityStore.js';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };

    this.onActivityChanged = this.onActivityChanged.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = ActivityStore.listen(this.onActivityChanged);
  }


  onActivityChanged(response_data) {
    this.setState({ activities : response_data.activities});
  }



  componentWillMount() {
    ActivityStore.getActivities();
  }


  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Activities activities={this.state.activities}/>
    );
  }
}