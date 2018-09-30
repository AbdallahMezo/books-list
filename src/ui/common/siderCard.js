import React from 'react';
import Card from 'antd/lib/card';
import Skeleton from 'antd/lib/skeleton';
import List from 'antd/lib/list';
import {Link} from 'react-router-dom'

class SiderCard extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(({isLoading}) => ({isLoading: false}))
    }, 2000);
  }

  render() {
    const {data = [], title, entity} = this.props;
    return (
      <Card
        title={title}
        bordered
        className="card-style"
      >
        <Skeleton
          loading={this.state.isLoading}
          active={true}
        >
          <List
            dataSource={data}
            pagination={{
              pageSize: 5,
              total: data.length,
              size: 'small'
            }}
            renderItem={item => (
              <Link to={`${entity}/${item.id}`}>
                <List.Item>
                  {item.name}
                </List.Item>
              </Link>
            )}
          >
          </List>
        </Skeleton>
      </Card>
    )
  }
};

export default SiderCard;
