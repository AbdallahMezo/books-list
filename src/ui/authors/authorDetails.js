import React from 'react';
import API from '../../app/api';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Skeleton from 'antd/lib/skeleton';
import List from 'antd/lib/list';
import Divider from 'antd/lib/divider';
import BookItem from '../books/bookItem';

class AuthorDetails extends React.Component {
  state = {
    isLoading: true,
  };

  setAuthorDate = async authorId => {
    const author = await API.getAuthorById(authorId);
    this.setState(() => ({author}))
  }

  setAuthorBookData = async authorId => {
    const books = await API.getBooksByAuthorId(authorId);
    this.setState(() => ({books}))
  }

  componentDidMount() {
    const {
      match: {
        params: {
          authorId,
        },
      },
    } = this.props;

    this.setAuthorDate(authorId)
    this.setAuthorBookData(authorId).then(() => {
      this.setState(() => ({isLoading: false}))
    })
  }

  render() {
    console.log('===== this.props =====', this.props)
    console.log('===== this.state =====', this.state)
    const {
      author = {},
      books = {},
    } = this.state;
    return (
      <Skeleton loading={this.state.isLoading}>
        <Row
          type="flex"
          justify='center'
          style={{textAlign: 'left'}}
        >
          <Col xs={24}>
            <h1>{author.name}</h1>
            <h4><i>~{author.jobTitle}</i></h4>
            <p>{author.bio}</p>
          </Col>
          <Divider
            style={{marginBottom: '30px'}}
          >His Books</Divider>
          <Col xs={24}>
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
          </Col>
        </Row>
      </Skeleton>
    )
  }
}

export default AuthorDetails;
