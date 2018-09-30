// Here are the application route logic
// @ https://github.com/ReactTraining/react-router
import React from 'react'
import BookDetails from '../ui/books/bookDetails';
import AddAuthor from '../ui/authors/addAuthor';
import AuthorDetails from '../ui/authors/authorDetails';
import BooksList from '../ui/books/bookList';
import { BrowserRouter as Router , Link, Route} from "react-router-dom";

export const routes = [
  {
    name: 'homepage',
    path: '/',
    exact: true,
    component: () => <BooksList/>,
  },
  {
    name: 'bookDetails',
    path: '/book/:bookId',
    component: props => <BookDetails {...props} />,
  },
  // {
  //   name: 'addBook',
  //   path: '/book/add',
  //   component: () => <div>Book Add page</div> // BookAddPage,
  // },
  // {
  //   name: 'editBook',
  //   path: '/book/:bookId/edit',
  //   component: () => <div>editBook</div>,
  // },
  {
    name: 'addAuthor',
    path: '/author/add',
    component: () => <AddAuthor/>,
  },
  {
    name: 'authorDetails',
    path: '/author/:authorId',
    component: props => <AuthorDetails {...props} />,
  },

  // {
  //   name: 'editAuthor',
  //   path: '/author/:authorId/edit',
  //   component: () => <div>editAuthor</div>,
  // },
  // {
  //   name: 'categoryDetails',
  //   path: '/category/:categoryId',
  //   component: () => <div>categoryDetails</div>,
  // },
  // {
  //   name: 'addCategory',
  //   path: '/category/:categoryId/add',
  //   component: () => <div>addCategory</div>,
  // },
  // {
  //   name: 'editCategory',
  //   path: 'category/:categoryId/edit',
  //   component: () => <div>editCategory</div>,
  // },
];
