import React from 'react';
import PropTypes from 'prop-types';

import './App-header.scss';

import TodoStat from '../Todo-stat';

const AppHeader = ({ doneCount, moreToDo }) => (
  <div className="app-header">
    <h1 className="app-header__title">My todo list</h1>
    <div className="app-header__stat">
      <TodoStat doneCount={doneCount} moreToDo={moreToDo} />
    </div>
  </div>
);

AppHeader.propTypes = {
  doneCount: PropTypes.number.isRequired,
  moreToDo: PropTypes.number.isRequired,
};

export default AppHeader;
