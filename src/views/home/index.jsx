import React from "react";
import { addCount, reduceCount } from '@/store/actions.js'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    const { value, onReduceClick, onIncreaseClick } = this.props;
    console.log(value,onIncreaseClick);
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
    value: state.computedCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReduceClick: () => dispatch(reduceCount(1)),
    onIncreaseClick: () => dispatch(addCount(1))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);