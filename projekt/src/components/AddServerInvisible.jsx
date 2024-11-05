/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useState } from "react";
export default function addServerInvisible({data})
{
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [y, setY] = useState([]);
    
    console.log(y)
    return(
        <div className="a">
        <div className="addServerInvisible">
            <h3>Nazwa:</h3><input type="text" name="" className="serverNameInput" id="" onInput={(e) => {
                setA(e.target.value)
                
            }} />
            <h3>Fota:</h3>
            <img className="imgOption" src="/img/options/l1.jfif" alt=""  onClick={(e) => {
                setB("/img/options/l1.jfif")
                {(window.getComputedStyle(e.target).borderColor != 'green' ? e.target.style.setProperty("border", "1px solid green") : e.target.style.setProperty("border", "none"))}
            }}/>
            <img className="imgOption" src="/img/options/l2.jfif" alt="" onClick={(e) => {
                setB("/img/options/l3.jfif")
                e.target.style.setProperty("border", "1px solid green")
                }}/>
            <img className="imgOption" src="/img/options/l3.jfif" alt="" onClick={(e) => {
                setB("/img/options/l3.jfif")
                e.target.style.setProperty("border", "1px solid green")
                }}/>
            <h3>Dodaj użytkowników:</h3>
            <ul>
            {data && data.users ? (
            data.users.map((user) => (
                <li key={user.userId} onClick={(e) => {
                    setY("a")
                    e.target.style.setProperty("border", "1px solid green")
                }}><img src={"url(" + user.avatar + ")"} className="userAvatarAdd" />{user.username}</li>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </ul>
      <button className="makeServer" onClick={ async () => {
        document.querySelector(".a").style.setProperty("display", "none")
         const response = await fetch("http://localhost:3000/addServer", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: a,
              admin: "1",
              avatar: b,
              users: "1",
            }),
          });
      }}>Stwórz!</button>
      </div>
      </div>
    )
}