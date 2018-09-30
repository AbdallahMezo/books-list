import React from 'react';
import Skeleton from 'antd/lib/skeleton';
import Card from 'antd/lib/card';
import { BrowserRouter as Router , Link, Route} from "react-router-dom";
import Button from 'antd/lib/button';

class BookItem extends React.Component {

  renderBookMeta = book => {
    return (
      <div>
        <b>Published in :</b> {book.publishYear}
        <b> / Pages :</b> {book.pagesNumber}
      </div>
    )
  }

  render() {
    const {book} = this.props;
    return (
      <Card
        title={book.title}
        extra={this.renderBookMeta(book)}
        className='card-style'
      >
        <div className='book-item'>
          <div className='book-image'>
            <img className='responsive-img' src={book.image} alt={`${book.title} cover`}/>
          </div>
          <div>
            <p>{book.description}</p>
              <Link to={{pathname: `book/${book.id}`}} book={book}>
                <Button className='seemore-btn' type='primary'>See more</Button>
              </Link>
          </div>
        </div>
      </Card>
    )
  }
}

export default BookItem;
