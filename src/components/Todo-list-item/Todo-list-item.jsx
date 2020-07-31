import React from 'react';
import PropTypes from 'prop-types';

import './Todo-list-item.scss';

const TodoListItem = ({ item }) => {
  const { label } = item;
  return <span>{label}</span>;
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoListItem;
