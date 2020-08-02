import React, { Component } from 'react';

import './App.scss';

import AppHeader from './App-header';
import SearchPanel from './Search-panel';
import TodoList from './Todo-list';
import ItemAddForm from './Item-add-form';

export default class App extends Component {
  maxId = 0;

  constructor() {
    super();
    this.state = {
      items: [
        this.createTodoItem('Cook food'),
        this.createTodoItem('Learn English'),
        this.createTodoItem('Learn React'),
        this.createTodoItem('Learn Angular'),
      ],
    };
    const { items } = this.state;
    this.maxId = items.length;
  }

  onAddItem = (text) => {
    this.setState((prevState) => {
      const newItem = this.createTodoItem(text);
      return {
        items: [...prevState.items, newItem],
      };
    });
  };

  onDeleteItem = (id) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id !== id),
      };
    });
  };

  onToggleProperty = (property, id) => {
    this.setState((prevState) => {
      const newItems = prevState.items;
      const index = newItems.findIndex((item) => item.id === id);
      newItems[index][property] = !newItems[index][property];
      return newItems;
    });
  };

  createTodoItem(label) {
    this.maxId += 1;
    return {
      label,
      important: false,
      id: this.maxId,
      isDone: false,
    };
  }

  render() {
    const { items: todoList } = this.state;
    const doneCount = todoList.filter((item) => item.isDone).length;
    const moreToDo = todoList.length - doneCount;
    return (
      <div className="application">
        <AppHeader doneCount={doneCount} moreToDo={moreToDo} />
        <SearchPanel />
        {todoList.length !== 0 ? (
          <TodoList
            items={todoList}
            onDeleteItem={this.onDeleteItem}
            onToggleProperty={this.onToggleProperty}
          />
        ) : (
          <span className="application__no-todos">Add some todo</span>
        )}
        <div className="application__item-add-form">
          <ItemAddForm onAddItem={this.onAddItem} />
        </div>
      </div>
    );
  }
}
