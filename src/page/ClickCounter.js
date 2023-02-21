import React, { Component } from 'react'
import WithCounter from './WithCounter'
import UpdateComponent from './WithCounter'
class ClickCounter extends Component {
  
    render() {
        const {count,incrementCount}=this.props
    return (
      <button onClick={incrementCount}>
        {this.props.name}
        Click {count} times</button>
    )
  }
}

export default WithCounter(ClickCounter)