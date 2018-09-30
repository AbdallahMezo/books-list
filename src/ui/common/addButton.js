import React from 'react';
import { BrowserRouter as Router , Link, Route} from "react-router-dom";
import Button from 'antd/lib/button';

class AddButton extends React.Component {

  isButtonDisabled = () => {
    const {item} = this.props;
    const urlArr = window.location.href.split('/');
    return item !== 'author' || urlArr[urlArr.length - 1] === 'add'
  }

  render() {
    const {item} = this.props;
    return (
      <Link to={`${item}/add`}>
        <Button
          className="add-button"
          type='primary'
          disabled={this.isButtonDisabled()}
        >
          {`Add ${this.props.item}`}
        </Button>
      </Link>

    )
  }
}

export default AddButton;
