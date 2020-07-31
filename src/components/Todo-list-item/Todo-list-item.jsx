import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo-list-item.scss';

export default class TodoListItem extends Component {
  render() {
    const { item } = this.props;
    const classes = [];
    if (item.important) {
      classes.push('active');
    }
    return (
      <div className="todo-list-item">
        <span className={classes.join(' ')}>{item.label}</span>
        <div className="control-buttons">
          <button type="button" className="btn btn-outline-danger control-buttons__item">
            <i className="fa fa-trash-o" />
          </button>
          <button type="button" className="btn btn-outline-success control-buttons__item">
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
};
