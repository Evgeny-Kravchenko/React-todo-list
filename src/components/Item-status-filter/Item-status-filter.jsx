import React, { Component } from 'react';

import './Item-status-filter.scss';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group buttons" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-info buttons__item">
          All
        </button>
        <button type="button" className="btn btn-light buttons__item">
          Active
        </button>
        <button type="button" className="btn btn-light buttons__item">
          Done
        </button>
      </div>
    );
  }
}
