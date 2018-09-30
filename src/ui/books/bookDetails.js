import React from 'react';
import API from '../../app/api';
import Skeleton from 'antd/lib/skeleton';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Divider from 'antd/lib/divider';
import TextRow from '../common/textRow';

class BookDetails extends React.Component {
  state = {
    isLoading: true,
  };

  getAuthorName = async () => {
    const author = await API.getAuthorById(this.state.book.author)
    this.setState(() => ({author}))
  }

  getCategory = async () => {
    const category = await API.getCategoryById(this.state.book.category)
    this.setState(() => ({category}))
  }

  componentDidMount() {
    const {
      match: {
        params: {
          bookId
        }
      }
    } = this.props;
    API.getBookById(bookId)
      .then(book => {
        this.setState(() => ({
          book,
          isLoading: false,
        }))
        this.getAuthorName()
        this.getCategory()
      })

  }
  render() {
    const {book = {}, category = {}, author = {}} = this.state;
    return (
      <Skeleton loading={this.state.isLoading}>
        <Row
          type='flex'
          align='start'
          justify='space-between'
          style={{textAlign: 'left'}}
        >
          <Col sm={12} xs={24}>

            <h2>{book.title}</h2>
            <TextRow>
              <b>By: </b><span>{author.name}</span><br/>
            </TextRow>
            <TextRow>
              <b>Number of page: </b><span>{book.pagesNumber}</span><br/>
            </TextRow>
            <TextRow>
              <b>Publish Year: </b><span>{book.publishYear}</span><br/>
            </TextRow>
            <TextRow>
              <b>ISBN: </b><span>{book.isbn}</span><br/>
            </TextRow>
            <TextRow>
              <b>Classifaction: </b><span>{category.name}</span><br/>
            </TextRow>
          </Col>
          <Col sm={12} xs={24} style={{textAlign: 'right'}}>
            <img src={book.image} alt={`${book.title} cover`}/>
          </Col>
        </Row>
        <Divider>Bio</Divider>
        <Row style={{textAlign: 'left'}}>
          <p>{book.description}</p>
        </Row>
      </Skeleton>
    )
  }
}

export default BookDetails;
