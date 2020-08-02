import React from 'react';
import PropTypes from 'prop-types';

import './Todo-list.scss';

import TodoListItem from '../Todo-list-item';

const TodoList = (props) => {
  const { items, onDeleteItem, onToggleProperty } = props;
  return (
    <ul className="list-group todo-list">
      {items.map((item) => {
        const { id } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleProperty={onToggleProperty}
            />
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleProperty: PropTypes.func.isRequired,
};

export default TodoList;
