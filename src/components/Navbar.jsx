import navImg from '../assets/img/troll-face.webp'

function Navbar() {
    
    return(
        <header className="d-flex align-items-center justify-content-between">
        <div className="left-side d-flex">
          <div className="nav-icon">
            <img className="nav-img" src={navImg}/>
          </div>
          <div className="heading">
            <h1 className="heading-text text-white">Meme Generator</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="nav-title">
            <p className="text-white">React Course - Project 3</p>
          </div>
        </div>
      </header>
    )
}

export default Navbar