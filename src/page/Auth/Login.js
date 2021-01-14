import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)
  const handleLogin =()=>{
    alert('lgoin dengan email '+ email + ' passwordnya '+ password)
  }
  useEffect(()=>{
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((res)=>{
      console.log(res);
      setLoading(false)
      setAlbums(res.data)
    })
  },[])
  
  useEffect(() => {
  console.log('email = '+ email);
    return () =>{
      console.log('helo')
    } 
  }, [email])

  return loading ? 
  (
  <div>
    <h1>Loading</h1>
  </div>
  ):(
    <div>
      <h1>halaman login</h1>
      <ul>
        <li>
          <label htmlFor="email">email</label>
          <input type="text" id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="password">password</label>
          <input type="passwrod" id="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        </li>
      </ul>
      <button onClick={handleLogin} className={email !=='' ? 'btn btn-primary': 'error'}>login</button>
      <hr/>
      <ul>
        {albums.map((album)=>
          <li>{album.title}</li>
        )}
        
      </ul>
    </div>
  )
}

export default Login
