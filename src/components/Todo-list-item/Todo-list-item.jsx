import React from 'react';
import PropTypes from 'prop-types';

import './Todo-list-item.scss';

const TodoListItem = (props) => {
  const {
    item: { isDone, important, id, label },
    onDeleteItem,
    onToggleProperty,
  } = props;
  const classes = ['todo-list-item__label'];
  if (important) {
    classes.push('active');
  }
  if (isDone) {
    classes.push('todo-list-item__label_done');
  }
  return (
    <div className="todo-list-item">
      <span
        role="button"
        tabIndex={0}
        className={classes.join(' ')}
        onClick={() => {
          onToggleProperty('isDone', id);
        }}
        onKeyDown={() => {
          onToggleProperty('isDone', id);
        }}
      >
        {label}
      </span>
      <div className="control-buttons">
        <button
          type="button"
          className="btn btn-outline-danger control-buttons__item"
          onClick={() => {
            onDeleteItem(id);
          }}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          type="button"
          className="btn btn-outline-success control-buttons__item"
          onClick={() => {
            onToggleProperty('important', id);
          }}
        >
          <i className="fa fa-exclamation" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleProperty: PropTypes.func.isRequired,
};
