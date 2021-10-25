import React from "react";
import actions from '@/store/actions'
import { connect } from 'react-redux'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.requestUserInfo({location:3})).then(() => {console.log(566)})
  }

  render() {
    const { value, onReduceClick, onIncreaseClick, userInfo } = this.props;
    console.log(userInfo)
    return (
      <div>
        <button onClick={onReduceClick}>Reduce</button>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.common.count,
    userInfo: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onReduceClick: () => dispatch(actions.reduceCount(1)),
    onIncreaseClick: () => dispatch(actions.addCount(1))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);