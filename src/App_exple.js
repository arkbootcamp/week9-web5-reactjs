// import React, {useState} from 'react'

// function App() {
//   const [data, setData] = useState(['risano', 'akbar', 'muhammad'])
//   const [no, setNo] = useState(0)

//   function increment(){
//     setNo(no+1)
//   }

//   return (
//     <div className="App">
//       <h1>nomor : {no}</h1>
//       {data.map((item)=>
//         <h1 className="text-primary">hello {item} </h1>
//       )}
//       <button onClick={()=> {setData(['helo', 'world'])}}>hapus</button>
//       <button onClick={increment}>increment</button>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react'
import Button from './component/button/Button'
class App extends Component{

constructor(props){
  super(props)
  this.state = {
    data: ['risano', 'akbar', 'muhammad'],
    no: 2
  } 
}

state = {
  
}

handleHapus =()=>{
this.setState({data:[]})
this.setState({})
}

render(){
  return(
    <div className="App">
      <h1 className="button">{this.state.no}</h1>
      {this.state.data.map((item)=>
        <div>
        <h1 className="text-primary">hello {item} </h1> 
        </div>
      )}
      <button onClick={this.handleHapus}>hapus</button>
      
      <Button/>
    </div>
    // <Fragment>
    // <h1>hello world</h1>
    // <h4>hello.......</h4>
    // </Fragment>
  )
}

}
export default App;
