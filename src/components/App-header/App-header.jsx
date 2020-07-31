import React from 'react';

import './App-header.scss';

import TodoStat from '../Todo-stat';

const AppHeader = () => (
  <div className="app-header">
    <h1 className="app-header__title">My todo list</h1>
    <div className="app-header__stat">
      <TodoStat />
    </div>
  </div>
);

export default AppHeader;
