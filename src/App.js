import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx'
import { Routes, Route, useParams, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

export default function App() {
  const [characters, setCharacters] = useState();
  const navigate = useNavigate();

  // simulacion de seguridad
  const [access, setAccess] = useState(false);
  const username = 'tignanellimarco@gmail.com';
  const password = 'alphabeta';
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
 useEffect(() => {
  !access && navigate('/');
}, [access]);
 // fin de simulacion

  const { id } = useParams();
  const location = useLocation();

  const onSearch = (character) => {
    fetch(`${process.env.REACT_APP_URL_BASE}/character/${character}?key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (idCharacter) => {
    setCharacters(() => {
      characters.filter((character) => {
        return character.id !== idCharacter;
      })
    });
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' ? <NavBar onSearch={onSearch} /> : ''}
      <div>
        <Routes>
          <Route path='/home' element={<Cards
            characters={characters}
            onClose={onClose}
          />} />
          <Route path='/about' element={<About />} />
          <Route path={`/detail/${id}`} element={<About />} />
          <Route path={`/`} element={<Form login={login} />} />
        </Routes>
      </div>
      <hr />
    </div>
  )
}