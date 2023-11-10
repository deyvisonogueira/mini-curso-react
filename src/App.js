import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';

// function App() {
//   const [contador, setContador] = useState(0);
//   return (
//   <div>
//     <h1>{contador}</h1>
//     <button onClick={() => setContador(contador + 1)}> + </button>
//     <button onClick={() => {
//       console.log(contador); 
//       if (contador>0){
//         setContador(contador -1);
//         } else {
//           alert("oi")
//           }
//           }}>.            
//           </button>
//     <button onClick={() => setContador(contador - 1)}> - </button>
//   </div>);
// }

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => {
        setPosts(data)
    })
  }, [])

  // return (
  //   <div>
  //     <ul>{
  //     posts.map(post => {
  //       return <li>{post.title}</li>        
  //     })}
  //     </ul>
  //   </div>
  // );
  return (
    <Container>
      <Row>{
      posts.map(post => {
        return <Col>{post.title}</Col>        
      })}
      </Row>
    </Container>
  );
}

export default App;