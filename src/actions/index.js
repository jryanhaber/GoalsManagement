export function selectBook(book) {
  // select book is an action creator that needs to return an action, object and type

  // all actions require type
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
