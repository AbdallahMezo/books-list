import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import {AppConsumer} from '../../app/context';
import SiderCard from '../common/siderCard';
import { Route, Switch , Redirect} from "react-router-dom";
import {routes} from '../../app/routes';

class Layout extends React.Component {

  render() {
    return (
      <AppConsumer>
        {({state}) => (
          <Row
            className="main-layout"
            type="flex"
            justify="space-between"
            align="start"
          >
          <Col xs={6}>
            <SiderCard title='Authors' entity='author' data={state.authors}/>
            <SiderCard title='Categories' entity='category' data={state.categories}/>
          </Col>
          <Col xs={17}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
            <Redirect to="/" />
          </Switch>
          </Col>
        </Row>
        )}
      </AppConsumer>
    )
  }
}

export default Layout;
