import uuid4 from 'uuid4/index';

const actions = {
  // addBook: () => {},

  // editBook : () => {},

  addAuthor: (state, author) => {
    author.id = uuid4();
    return {
      ...state,
      authors: [
        author,
        ...state.authors,
      ]
    }
  },

  // editAuthor: () => {},

  // addCategory: () => {},

  // editCategory: () => {},
}

export {
  actions,
};
