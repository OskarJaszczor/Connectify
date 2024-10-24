import { useState, useEffect } from 'react'
import './App.css'
import ServerHandler from './components/ServerHandler';

export function getFromNode()
{
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/x');
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



function App() {

  return (
    <div className='mainContainer'>
      <div className='topBar'>
        <span>Connectify</span>
        
        <ServerHandler name='x'></ServerHandler>
        
      </div>
    </div>
  )
}

export default App
