import React from 'react';
import PropTypes from 'prop-types';

import './Todo-stat.scss';

const TodoStat = ({ doneCount, moreToDo }) => {
  return <span className="item-status-filter">{`${moreToDo} more to do, ${doneCount} done`}</span>;
};

export default TodoStat;

TodoStat.propTypes = {
  doneCount: PropTypes.number.isRequired,
  moreToDo: PropTypes.number.isRequired,
};
