import { useState, useEffect } from "react"

import btnImg from '../assets/img/button-img.webp'
import memeImg from '../assets/img/meme-img.webp'

function Main() {

  const [meme, setMeme] = useState({ 
    input1: "SHUT UP",
    input2: "AND TAKE MY MONEY",
    randomImage: memeImg})

  const [memeImage, setMemeImage] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setMemeImage(data.data.memes))
  },[])

  function getMemeImage() {
    const memesArray = memeImage
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({ ...prevMeme, randomImage:url}))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({ ...prevMeme, [name]:value}))
  }
    
    return(
        <div className="main bg-white">
          <div className="form">
            <div className="input-fields-div d-flex">
              <div className="input1">
                <input type="text" name="input1" value={meme.input1} onChange={handleChange} />
              </div>
              <div className="input2">
                <input type="text" name="input2" value={meme.input2} onChange={handleChange} />
              </div>
            </div>
            <div className="form-button-div">
              <button className="btn-form text-white d-flex align-items-center justify-content-center" onClick={getMemeImage}>
                Get a new meme image <img className="btn-img" src={btnImg}/>
              </button>
            </div>
          </div>
          <div className="meme-display-div">
            <img className="meme-img" src={meme.randomImage}/>
            <div className="text-top-div">
              <h2 className="text-top-text text-white">{meme.input1}</h2>
            </div>
            <div className="text-bottom-div">
              <h2 className="text-bottom-text text-white">{meme.input2}</h2>
            </div>
          </div>
        </div>
    )
}

export default Main