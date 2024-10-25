export default function NewMessage()
{

    return(
        <>
            <input type="text" name="" className="newMessageInput" />
            <button type="submit" style={{backgroundImage: `url(./img/send.png)`}} className="newMessageSend"></button>
        </>
    )
}