
import { useState, useEffect } from "react"
import { getRandomFact } from "./services/facts";

import './App.css';

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`  
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App() {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState();

  // efecto para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // efecto para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)

      })
  }, [fact]);


  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <p>Se recupera una imagen con las 3 primeras palabras del hecho-suceso</p>
      <section>
        <div className="fact">
          <strong>Hecho</strong>
          {fact && <p>{fact}</p>}
          <button onClick={handleClick}>Get new fact</button>
        </div>
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`imagen extraida usando las 3 primeras palabras del ${fact}`}></img>}
      </section>
    </main>
  )
}
