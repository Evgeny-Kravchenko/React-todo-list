import React from 'react';

import './Item-status-filter.scss';

const ItemStatusFilter = () => (
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

export default ItemStatusFilter;
