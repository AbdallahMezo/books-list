import React from 'react';
import AddButton from '../../common/addButton';

const buttonKeys = [
  'book',
  'author',
  'category',
];

class MainHeader extends React.Component {

  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <img src="book.png" alt="" className="logo"/>
          <h2>Book Listing</h2>
        </div>
        <div>
         {buttonKeys.map((item, i) => <AddButton key={i} item={item}/>)}
        </div>
      </div>
    )
  }
}

export default MainHeader;
