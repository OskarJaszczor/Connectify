export default function Message()
{

    return(
        <div className="messageContainer">
            <div className="messageAuthorAvatar" style={{backgroundImage: `url(${props.message.avatar})`}}></div>
            <div className="messageBox">
                <span className="messageAuthor">{props.message.name}</span> <span className="messageDate">{props.message.date}{props.message.hour}</span>
                <p className="messageContent">
                    {props.message.content}
                </p>
            </div>
        </div>
    )
}