import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Item-status-filter.scss';

export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      active: false,
      done: false,
    };
  }

  changeState = (event) => {
    event.persist();
    this.setState((prevState) => {
      const newState = {};
      const prevStateArray = Object.entries(prevState);
      prevStateArray.forEach((item) => {
        if (item[0] === event.target.id) {
          newState[item[0]] = true;
          return;
        }
        newState[item[0]] = false;
      });
      return newState;
    });
  };

  render() {
    const { filterByCondition } = this.props;
    const { all, active, done } = this.state;
    const classesActive = 'btn buttons__item buttons__item_active';
    const classes = 'btn btn-light buttons__item';
    return (
      <div
        className="btn-group buttons"
        role="presentation"
        onClick={(event) => {
          event.persist();
          this.changeState(event);
          filterByCondition(event.target.id);
        }}
        onKeyDown={(event) => {
          filterByCondition(event.target.id);
        }}
      >
        <button id="all" type="button" className={all ? classesActive : classes}>
          All
        </button>
        <button id="active" type="button" className={active ? classesActive : classes}>
          Active
        </button>
        <button id="done" type="button" className={done ? classesActive : classes}>
          Done
        </button>
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  filterByCondition: PropTypes.func.isRequired,
};
