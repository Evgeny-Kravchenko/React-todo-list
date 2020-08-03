import React from 'react';
import PropTypes from 'prop-types';

import './Search-panel.scss';

import ItemStatusFilter from '../Item-status-filter';

const SearchPanel = ({ filterByText, filterByCondition }) => {
  return (
    <div className="input-group search-panel">
      <input
        type="search"
        className="form-control search-panel__input"
        placeholder="Search todo"
        onChange={(e) => {
          filterByText(e.target.value);
        }}
      />
      <ItemStatusFilter filterByCondition={filterByCondition} />
    </div>
  );
};

SearchPanel.propTypes = {
  filterByText: PropTypes.func.isRequired,
  filterByCondition: PropTypes.func.isRequired,
};

export default SearchPanel;
