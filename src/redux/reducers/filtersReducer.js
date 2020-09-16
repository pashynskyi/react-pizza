import { SET_CATEGORY, SET_SORT_BY } from "../types/filtersTypes";

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
};

const filtersReducer = (state = initialState, action) => {
  if (action.type === SET_SORT_BY) {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filtersReducer;