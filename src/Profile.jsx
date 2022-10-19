import React, { Component } from 'react'
import Name from './Comps/Name'
import Bio from './Comps/Bio'
import Proff from './Comps/Proff'
import ProPic from './Comps/ProPic'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        show : false,
        seconds:0
    }
}
componentDidMount(){
  setInterval(() => {
    this.setState({seconds:this.state.seconds+1})
  }, 1000);
}


  render() {
    return (
      <div>
        <Name/>
        <Bio/>
        <Proff/>
        <ProPic/>
        <h1>this profile is shown for {this.state.seconds} seconds</h1>
      </div>
    )
  }
}
