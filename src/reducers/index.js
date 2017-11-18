import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import GoalsReducer from './reducer_goals';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  goals: GoalsReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
