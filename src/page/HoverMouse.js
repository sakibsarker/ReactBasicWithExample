import React, { Component } from 'react'

class HoverMouse extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <h3 onMouseOver={incrementCount
    }>Hover {count} time</h3>
    )
  }
}

export default HoverMouse