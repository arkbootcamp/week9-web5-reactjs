import React, { Component } from 'react'

class Detail extends Component {
  constructor(props){
    super()
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>halaman detail</h1>
        <h3>{this.props.match.params.id}</h3>
      </div>
    )
  }
}

export default Detail
