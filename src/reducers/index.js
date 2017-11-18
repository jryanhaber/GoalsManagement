import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import GoalsReducer from './reducer_goals';

const rootReducer = combineReducers({
  books: BooksReducer,
  goals: GoalsReducer,
});

export default rootReducer;
