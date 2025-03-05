import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([{item:"item"}])
  var url= "https://jsonplaceholder.typicode.com/todos"
  fetch(url).then((res)=>{
    return res.json();

  }).then((data)=>{
    setData(data);
  });

  return (
    <>
      <div>
       
      </div>
      <ul>
        {
          data.map((item,index)=>{
            return (
              <li key={index}>
                {item.title}
              </li>
            )
          })
        }
      </ul>
      
    </>
  )
}

export default App
