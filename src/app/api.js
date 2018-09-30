import {books, authors, categories} from './db.json';

const API = {
  getBooks: () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(books), 2000);
    });
  },
  getBookById: bookId => {
    const book = books.find(book => book.id === bookId);
    return new Promise(resolve => {
      setTimeout(() => resolve(book), 2000);
    });
  },
  getBooksByAuthorId: authorId => {
    const authorBooks = books.filter(book => book.author === authorId)
    return new Promise(resolve => {
      setTimeout(() => resolve(books), 2000);
    });
  },
  getAuthors: () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(authors), 2000);
    });
  },
  getAuthorById: id => {
    const author = authors.find(author => author.id === id)
    return new Promise(resolve => {
      resolve(author)
    })
  },
  getCategoryById: id => {
    const category = categories.find(category => category.id === id)
    return new Promise(resolve => {
      resolve(category)
    })
  }
}

export default API;
