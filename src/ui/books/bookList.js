import React from 'react'
import List from 'antd/lib/list';
import Skeleton from 'antd/lib/skeleton';
import BookItem from './bookItem';
import API from '../../app/api';

class BookList extends React.Component {
  state = {
    books: [],
    isLoading: true, // Its true by default to show loader before fetching data
  }

  componentDidMount() {
    API.getBooks()
      .then((result) => {
        this.setState(() => ({
          books: result,
          isLoading: false,
        }))
      })
  }

  render() {
    const {books} = this.state;
    return (
      <Skeleton loading={this.state.isLoading}>
        <List
          dataSource={books}
          pagination={{
            pageSize: 4,
            total: books.length,
            size: 'small'
          }}
          renderItem={item => (
            <BookItem
              book={item}
            />
          )}
        />
      </Skeleton>
    )
  }
}

export default BookList;
