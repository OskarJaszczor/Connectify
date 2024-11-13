/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import imageToBase64 from 'image-to-base64/browser'
import { useState } from 'react'
export default function addServerInvisible({ data }) {
	const [a, setA] = useState('')
	const [b, setB] = useState('')
	const [y, setY] = useState([])
	const [file, setFile] = useState('')

	//console.log(y);
	return (
		<div className="a">
			<div className="addServerInvisible">
				<h3>Nazwa:</h3>
				<input
					type="text"
					name=""
					className="serverNameInput"
					id=""
					onChange={e => {
						setA(e.target.value)
					}}
				/>
				<h3>Fota:</h3>
				<input
					type="file"
					id="file"
					onInput={e => {
						setFile(e.target.value)
						imageToBase64(`${file}`)
							.then(response => {
								// dorobic nazwe pliku
								const filePath = path.join('/img', fileName)

								const buffer = Buffer.from(base64Data, 'base64')

								fs.writeFileSync(filePath, buffer)
							})
							.catch(error => {
								console.log(error)
							})
					}}></input>

				<h3>Dodaj użytkowników:</h3>
				<ul>
					{data && data.users ? (
						data.users.map(user => (
							<li
								key={user.userId}
								onClick={e => {
									setY('a')
									e.target.style.setProperty('border', '1px solid green')
								}}>
								<img src={'url(' + user.avatar + ')'} className="userAvatarAdd" />
								{user.username}
							</li>
						))
					) : (
						<p>Loading...</p>
					)}
				</ul>
				<button
					className="makeServer"
					onClick={async () => {
						document.querySelector('.a').style.setProperty('display', 'none')
						const response = await fetch('http://localhost:3000/addServer', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								name: a,
								admin: '1',
								avatar: b,
								users: '1',
							}),
						})
					}}>
					Stwórz!
				</button>
			</div>
		</div>
	)
}
