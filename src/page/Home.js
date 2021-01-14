import React, { Component } from 'react'
import Card from '../component/card/Card'
class Home extends Component {
  constructor(props){
    super()
    this.state={
      foods:[
        {
          name: 'nasi goreng',
          description: 'hslwerwer',
          price: 10000
        },
        {
          name: 'nasi sayur',
          description: 'hslwerwer',
          price: 4000
        },
        {
          name: 'nasi uduk',
          description: 'hslwerwer',
          price: 8000
        }
      ]
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>halaman home</h1>
        {this.state.foods.map((food, index)=>
          food.price > 5000 && <Card title={food.name} description={food.description} price={food.price} key={index} />
        )}
      </div>
    )
  }
}
export default Home