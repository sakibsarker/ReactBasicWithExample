import React, { Component } from 'react'

class Refs extends Component {
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()
    this.cbRef=null
    this.setCbRef=element=>{
      this.cbRef=element
    }
  
    
  }

  componentDidMount(){
    if(this.cbRef){
      this.cbRef.focus() 
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
  }
clickHandeler=()=>{
  alert(this.inputRef.current.value)

}
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandeler}>click</button>

      </div>
    )
  }
} 

export default Refs