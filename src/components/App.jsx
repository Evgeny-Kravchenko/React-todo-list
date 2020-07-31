import React from 'react';

import './App.scss';

import AppHeader from './App-header/App-header';
import SearchPanel from './Search-panel/Search-panel';
import TodoList from './Todo-list/Todo-list';

const items = [
  { label: 'Cook food', important: false, id: 1, isDone: false },
  { label: 'Learn English', important: true, id: 2, isDone: false },
  { label: 'Learn React', important: true, id: 3, isDone: false },
  { label: 'Learn Angular', important: true, id: 4, isDone: false },
];

export default function App() {
  return (
    <div className="application">
      <AppHeader />
      <SearchPanel />
      <TodoList items={items} />
    </div>
  );
}
