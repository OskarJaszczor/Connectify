/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import ServerHandler from './ServerHandler'
import ChannelHandler from './ChannelHandler'
import MessageHandler from './MessageHanlder'
import NewMessage from './NewMessage'
import AddServerInvisible from './AddServerInvisible'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle';

export default function MainApp({ username, setIsAuthenticated }) {
	const navigate = useNavigate()
	const [activeServer, SetActiveServer] = useState(0)
	const [activeChannel, SetActiveChannel] = useState(0)
	const [data, setData] = useState(null)
	const [activeUser, setUsername] = useState(localStorage.getItem('username') || '')
	const [theme, setTheme] = useState('light');


	// console.log('u' + ' ' + activeUser)
	//const imageToBase64 = require("image-to-base64");
	// useEffect(() => {
	// 	// Jeżeli chcesz używać queryParams, można użyć URLSearchParams w React
	// 	const queryParams = new URLSearchParams(window.location.search) // Pobierz parametry URL
	// 	const usernameFromUrl = queryParams.get('username') // Pobierz 'username' z URL

	// 	if (usernameFromUrl) {
	// 		setUser(usernameFromUrl) // Zaktualizuj stan, jeśli 'username' istnieje w URL
	// 	}
	// }, [])
	// POBIERANIE ZDJEC NA SERWER
	/*imageToBase64("img/a.png")
      .then((response) => {
        const filePath = path.join('./uploads', fileName);
  
        const buffer = Buffer.from(base64Data, 'base64');
    
        fs.writeFileSync(filePath, buffer);
      })
      .catch((error) => {
        console.log(error);
      });
  */

	  const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		
		document.documentElement.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
	  };
	
	  
	  useEffect(() => {
		document.documentElement.className = theme === 'light' ? 'light-theme' : 'dark-theme';
	  }, [theme]);

	useEffect(() => {
		const delay = data == null ? 0 : 250

		setTimeout(() => {
			const fetchData = async () => {
				try {
					const response = await fetch('http://localhost:3000/x')
					const json = await response.json()
					setData(json)
				} catch (error) {
					console.error('Error fetching data:', error)
				}
			}
			fetchData()
		}, delay)
	}, [data])

	/*  PRZEWIJANIE CHATU NA DOL (DO PRZEROBIENIA)
    const scrollingElement = document.getElementById("scroller");
  
    const config = { childList: true };
  
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
    };
  
    const observer = new MutationObserver(callback);
    observer.observe(scrollingElement, config);
    */

	return (
		<div className="mainContainer">
			<div className="topBar">
				<span>CONNECTIFY</span>
				
      			<ThemeToggle onToggle={toggleTheme} theme={theme} />
      			
				<button
					className="rt"
					onClick={() => {
						localStorage.removeItem('username')
						setIsAuthenticated(false)
						navigate('/')
					}}>
					Log out
				</button>
			</div>
			<AddServerInvisible data={data}></AddServerInvisible>
			<ServerHandler data={data} SetActiveServer={SetActiveServer} activeServer={activeServer}></ServerHandler>

			<ChannelHandler
				data={data}
				activeServer={activeServer}
				activeChannel={activeChannel}
				setActiveChannel={SetActiveChannel}
				theme={theme}></ChannelHandler>

			<MessageHandler data={data} activeChannel={activeChannel} activeUser={activeUser}></MessageHandler>

			<NewMessage activeChannel={activeChannel} activeUser={username}></NewMessage>
		</div>
	)
}
