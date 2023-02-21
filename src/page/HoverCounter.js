import React, { Component } from 'react'
import WithCounter from './WithCounter'
 class HoverCounter extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h3 onMouseOver={incrementCount}>
          {this.props.name}
          Hover {count} time</h3></div>
    )
  }
}

export default WithCounter(HoverCounter) 