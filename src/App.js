import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className='responsive'>
      <h1>Length: {users.length}</h1>
      {
        users.map(user => <User title={user.title} body={user.body}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid coral', margin: '15px', padding: '10px', borderRadius: '15px' }}>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;
