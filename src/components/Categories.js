import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory
}) {

  const mapItems = items && items.map((item, index) => (
    <li
      className={activeCategory === index ? 'active' : ''}
      onClick={() => onClickCategory(index)}
      key={`${item}_${index}`}>{item}</li>
  ));

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {mapItems}
      </ul>
    </div>
  )
});

Categories.propsTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories; 