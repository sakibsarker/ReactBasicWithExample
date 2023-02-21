import React, { Component } from 'react'
import Rfinput from './Rfinput'

class Frprent extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
      
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Rfinput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default Frprent