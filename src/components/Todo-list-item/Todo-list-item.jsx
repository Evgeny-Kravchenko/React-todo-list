import React from 'react';
import PropTypes from 'prop-types';

import './Todo-list-item.scss';

const TodoListItem = ({ item }) => {
  const { label } = item;
  const classes = [];
  if (item.important) {
    classes.push('active');
  }
  return (
    <div className="todo-list-item">
      <span className={classes.join(' ')}>{label}</span>
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
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoListItem;
