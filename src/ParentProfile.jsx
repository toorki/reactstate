import React, { Component } from 'react'
import Profile from './Profile'

export default class ParentProfile extends Component {
  
constructor(props){
    super(props)
    this.state=({
        show:false
      
    })
}


test=()=>{
  this.setState({show:!this.state.show})
  console.log(this.state.show)
}

  render() {
    return (
      <div>
          
        <button onClick={this.test} >show</button>
        {this.state.show?<Profile/>:null}
        
      </div>
    )
  }
}
