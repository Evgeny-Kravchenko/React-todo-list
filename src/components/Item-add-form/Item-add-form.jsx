import React, { Component } from 'react';

import './Item-add-form.scss';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { onAddItem } = this.props;
    const { text } = this.state;
    if (text) {
      onAddItem(text);
      this.clearInput();
    }
  };

  onLabelChange = (event) => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  clearInput = () => {
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control item-add-form__input"
          placeholder="Add new todo"
          onChange={this.onLabelChange}
          value={text}
        />
        <button type="submit" className="btn btn-light buttons__item">
          Add item
        </button>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
