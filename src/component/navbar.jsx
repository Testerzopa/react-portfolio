import './navbar.css'

function Navbar(){
    return(
            <div className="container">
                <div className="logo">
                    <h1>Teekawin</h1>
                </div>
                <div className="content">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar