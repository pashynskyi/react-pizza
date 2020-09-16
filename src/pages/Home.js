import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  Categories,
  PizzaBlock,
  PizzaLoadingBlock,
  SortPopup
} from '../components';

import { setCategory, setSortBy } from '../redux/actions/filtersActions';
import { fetchPizzas } from '../redux/actions/pizzasActions';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc', },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log('category: ', category, 'sortBy: ', sortBy);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const mapItems = isLoaded
    ? items.map(obj => (
      <PizzaBlock key={obj.id} isLoading={true} {...obj} />
    ))
    : Array(8).fill(0).map((_, index) => (
      <PizzaLoadingBlock key={index} />
    ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {mapItems}
      </div>
    </div>
  )
}

export default Home
