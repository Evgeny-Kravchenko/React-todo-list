import React from 'react';

import './Search-panel.scss';

import ItemStatusFilter from '../Item-status-filter/Item-status-filter';

const SearchPanel = () => {
  return (
    <div className="input-group search-panel">
      <input type="search" className="form-control search-panel__input" placeholder="Search todo" />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
