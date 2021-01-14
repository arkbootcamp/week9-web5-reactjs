import React, { Component } from 'react'
import Button from '../component/button/Button_v2'
class About extends Component {

  handleClick=()=>{
    alert('hello world')
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>halaman about</h1>
        <Button title="delete" click={this.handleClick}/>
      </div>
    )
  }
}

export default About
