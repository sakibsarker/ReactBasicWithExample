import React, { Component } from 'react'
import Input from './Input'

class Foucsinput extends Component {
    constructor(props){
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandeler=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandeler}> Foucs Input</button>
      </div>
    )
  }
}

export default Foucsinput