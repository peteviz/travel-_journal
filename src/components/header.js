import '../App.css'


export default  function Header() {
    return (
        <div className="header">
            <img
            src={require(`../worldIcon.png`)}
            alt="World Icon"
            className="world_logo" />
            <p>my travel journal.</p>
        </div>
    )
}