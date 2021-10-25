import React from "react";
import actions from '@/store/actions'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    const { value, onReduceClick, onIncreaseClick } = this.props;
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
    value: state.common.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReduceClick: () => dispatch(actions.reduceCount(1)),
    onIncreaseClick: () => dispatch(actions.addCount(1))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);