import {Component,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>Home</div>
        <Link to="/about">to About</Link>
        <Button type="primary">Primary Button</Button>
      </Fragment>
    )
  }
}

export default Home;