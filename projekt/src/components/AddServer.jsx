export default function AddServer()
{
    return(
    
    <div className="addServerHandler" onClick={() => {
        document.querySelector(".a").style.setProperty("display", "block")
    }}>
        <h1 className="plus">+</h1>
    </div>
    )
}