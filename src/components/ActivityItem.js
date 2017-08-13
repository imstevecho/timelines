import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActivityItem extends Component {

  constructor(props){
    super(props);
    this.divClass = ((this.props.no % 2 === 0) ? "frst-timeline-block frst-even-item" : "frst-timeline-block frst-odd-item");
    this.activityName = `Activity ${this.props.no}`
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    alert(this.activityName);
  }

  render() {

    return (
      <div className={this.divClass} data-animation="slideInUp">
          <div className="frst-timeline-img"> <span><i className="fa fa-star" aria-hidden="true"></i></span> </div>

          <div className="frst-timeline-content animated hingeTop" style={{position: 'relative'}}>
              <div className="frst-timeline-content-inner">
                  <h2>{this.activityName}</h2> <span className="frst-date">{this.props.date}</span>
                  <p><strong>Date:</strong> {this.props.date}</p>
                  <p><strong>User:</strong> {this.props.username}</p>
                  <button type='button' className='button' onClick={this.handleOpen}>Open</button>
              </div>
          </div>
      </div>

    );
  }
}

ActivityItem.propTypes = {
    no: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired
}

export default ActivityItem;
