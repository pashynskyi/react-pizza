import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory
}) {
  const [visibleList, setVisibleList] = useState(false);

  const toggleVisibleList = () => {
    setVisibleList(!visibleList);
    document.body.classList.toggle("lock");
  }

  const handleClickCategory = (val) => {
    onClickCategory(val);
    toggleVisibleList();
  }

  const mapItems = items && items.map((item, index) => (
    <li
      className={activeCategory === index ? 'active' : ''}
      onClick={() => handleClickCategory(index)}
      key={`${item}_${index}`}
    >
      {item}
    </li>
  ));

  return (
    <div className="categories">
      <Button
        className={visibleList
          ? "categories__button categories__button--active"
          : "categories__button button--black"
        }
        onClick={toggleVisibleList}
      >
        Фильтры
      </Button>
      <span
        className={visibleList
          ? "categories__cross--active"
          : "categories__cross"
        }
        onClick={toggleVisibleList}
      >
        &#9932;
      </span>
      <ul
        className={visibleList
          ? "categories__list categories__list--active"
          : "categories__list"
        }
      >
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => handleClickCategory(null)}
        >
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