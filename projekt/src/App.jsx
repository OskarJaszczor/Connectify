import { useState, useEffect } from 'react'
import './App.css'
import ServerHandler from './components/ServerHandler';

export function getFromNode({endpoint})
{
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/' + endpoint);
                const json = await response.json();
                setData(json); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
        
    }, []);
    
  return data;
}


export async function sendToNode({endpoint, data}){
  
    const response = await fetch("http://localhost:3000/" + endpoint, {
    method: "POST",
    body: JSON.stringify({endpoint: data}),
    headers: {
        "Content-Type": "application/json",
    }     
    });

    getFromNode(endpoint)
 
}


function App() {

  return (
    <div className='mainContainer'>
      <div className='topBar'>
        <span>Connectify</span>
        
        <ServerHandler name="super mario"></ServerHandler>
        
      </div>
    </div>
  )
}

export default App
