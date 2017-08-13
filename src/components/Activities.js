import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

export default class Activities extends Component {

  constructor(props){
    super(props);
    this.sortedActivities = [];
  }

  componentWillReceiveProps(nextProps) {
    this.sortActivities(nextProps.activities);
  }


  sortActivities(activities) {
    if (activities) {
      this.sortedActivities = activities.sort((a, b) => (new Date(b.date)) - (new Date(a.date))) || [];
    }
  }

  render() {

    let activityItems = this.sortedActivities.map(activity => {
      return (
        <ActivityItem key={activity.no} {...activity} />
      );
    });


    return (
      <div className="Activity">
        {activityItems}
      </div>
    );
  }
}
