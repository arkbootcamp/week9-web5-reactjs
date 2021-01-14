import React, { Component } from 'react'
import axios from 'axios'
class Form extends Component {
  constructor(props){
    super(props)
    this.state ={
      email: '',
      name: '',
      users: ''
    }
    console.log('constructor');
  }
  handleChange=(event)=>{
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      this.setState({
        users: res.data
      })
    })
    
  }
  cobaUbahKeyObject=(e)=>{
   alert('hello')
  }
  componentDidUpdate(prevProps, prevState, snapshot){

  }
  componentWillUnmount(){
    console.log('componentWillunmount');
  }
  render() {
    console.log('render');
    console.log(this.state.users);
    return (
      <div className="container">
        <h6>email: {this.state.email}</h6>
        <h6>name: {this.state.name}</h6>
        <button onClick={()=> this.props.history.push('/detail/123123')}>pindah detail</button>
        <h1 className="text-center">form input</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" onChange={this.handleChange} aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" name="name" value={this.state.name} className="form-control" id="exampleInputPassword1" onChange={this.handleChange}/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.cobaUbahKeyObject}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
