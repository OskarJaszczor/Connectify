export default function NewMessage()
{

    return(
        <>
            <input type="text" placeholder="Type here..." name="" className="newMessageInput" />
            <button type="submit" style={{backgroundImage: `url(./img/send.png)`}} className="newMessageSend" ></button>
        </>
    )
}