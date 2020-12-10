import './App.css';
import React, {useState, useEffect} from 'react'
import CharacterList from "./components/CharacterList"
import axios from 'axios'


function App() {


  const [characters, setCharacters] = useState([]);

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharacters(res.data.results)
  })
  },[])

  return (
    <div>
    <CharacterList characters = {characters}/>
    </div>
  );
}

export default App;
