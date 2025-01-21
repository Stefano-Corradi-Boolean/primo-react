import './RickMorty.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RickMortyCard from './RickMortyCard';

const RickMorty = () => {
  // https://rickandmortyapi.com/api/character

  const [characters, setCharacters] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character");
  const [info, setInfo] = useState({});

  const fetchData = () => {
    axios.get(apiUrl)
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results)
        setInfo(res.data.info)
        console.log(res.data.info);

      })
  }

  const goNext = () => {
    setApiUrl(info.next)
  }

  const goPrev = () => {
    setApiUrl(info.prev)
  }

  // quando il componente viene montato si invoca la funzione fetchData()
  // devo invocaarla dentro allo useEffect() per evitare un loop infinito
  useEffect(() => {
    fetchData()
  }, [apiUrl])

  return (
    <div className="rm-container">
      <h1 className="text-center">Rick &amp; Morty - Wiki</h1>
      <div className="pagination">
        {/* <button onClick={fetchData} className="pagination-btn">Chiama API</button> */}
        {info.prev && <button onClick={goPrev} className="pagination-btn">Prev page</button>}
        {info.next && <button onClick={goNext} className="pagination-btn">Next page</button>}
      </div>
      <div className="characters">
        {characters.map(item => (
          <RickMortyCard
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
          />
        ))}
      </div>
    </div>
  )
}

export default RickMorty
