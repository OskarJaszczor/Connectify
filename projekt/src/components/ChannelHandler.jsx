export default function ChannelHandler(props)
{

    return(
        <div className="channelHandler"onClick={(e) => {
            console.log(e.target.value)
        }}>
            <span className="channelChar">{props.channel.channelChar}</span><p className="channelName">{props.channel.channelName}</p>
        </div>
    )
}