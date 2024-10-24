import { useState, useEffect } from 'react'
import './App.css'




function App() {
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
    
  if(data!=null)
    console.log(data)

  return (
    <div className='mainContainer'>
      <div className='topBar'>
        <span>Connectify</span>
        <h1>AleAleAleksandra</h1>
      </div>
    </div>
  )
}

export default App
