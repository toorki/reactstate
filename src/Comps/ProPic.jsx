import React, { Component } from 'react'
import img from './img.jpg'

export default class ProPic extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="img" />
      </div>
    )
  }
}
