import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Form, {Item as FormItem} from 'antd/lib/form';
import {reducer, AppConsumer} from '../../app/context';
import message from 'antd/lib/message';
import Input, {TextArea} from 'antd/lib/input';
import Button from 'antd/lib/button';
import {Link} from 'react-router-dom';

class AddAuthor extends React.Component {
  state = {
    isAdding: false,
  }

  // This message should be dispalyed for both success and failure
  // but in our case it will only show success
  showFeedback = authorName => message.success(`${authorName} added successfully`)

  submitAuthor = state => {
    const {
      form
    } = this.props;
    const {
      actionsMap: {
        addAuthor
      }
    } = state;
    form.validateFieldsAndScroll((errors, values) => {
      if (!errors) {
        this.setState(() => ({isAdding: true}))
        setTimeout(() => {
          addAuthor(values)
          this.setState(() => ({isAdding: false}))
          this.showFeedback(values.name)
          form.resetFields();
        }, 500);
      }
    })
  }

  render() {
    const {
      form: {
        getFieldDecorator,
      }
    } = this.props;
    return (
        <AppConsumer>
          {({state}) => (
            <Form>
              <FormItem
                hasFeedback
                label="Author name"
              >
                {getFieldDecorator('name', {
                  rules: [{
                    type: 'string',
                    required: true,
                    min: 5,
                    message: 'Just a validation message to set name more than 5 charcters' }],
                })(
                  <Input/>
                )}
              </FormItem>
              <FormItem
                hasFeedback
                label="Job"
              >
                {getFieldDecorator('job', {
                  rules: [{
                    type: 'string',
                    required: true
                  }],
                })(
                  <Input/>
                )}
              </FormItem>
              <FormItem
                hasFeedback
                label="Bio"
              >
                {getFieldDecorator('bio', {
                  rules: [{
                    type: 'string',
                    required: true
                  }],
                })(
                  <TextArea/>
                )}
              </FormItem>
              <Link to='/'>
                <Button
                  onClick={() => this.submitAuthor(state)}
                  type='primary'
                  loading={this.state.isAdding}
                >
                  Submit
                </Button>
              </Link>
            </Form>
          )}
        </AppConsumer>
    )
  }
}

export default Form.create()(AddAuthor);
