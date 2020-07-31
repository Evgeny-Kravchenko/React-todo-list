import React from 'react';
import PropTypes from 'prop-types';

import './Todo-list.scss';

import TodoListItem from '../Todo-list-item/Todo-list-item';

const TodoList = (props) => {
  const { items } = props;
  return (
    <ul className="list-group todo-list">
      {items.map((item) => {
        const { id, ...rest } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem item={rest} />
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
    })
  ).isRequired,
};

export default TodoList;
