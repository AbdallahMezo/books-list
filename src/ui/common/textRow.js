import React from 'react';

class TextRow extends React.Component {

  render(){
    return (
      <div className="text-row">
        {this.props.children}
      </div>
    )
  }
}

export default TextRow;
