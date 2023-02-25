import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx'
import { Routes, Route, useParams, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // simulacion de seguridad

  // const [access, setAccess] = useState(false);
  // const username = 'tignanellimarco@gmail.com';
  // const password = 'alphabeta';
  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // }
  // useEffect(() => {
  //   access && navigate('/');
  // }, [access]);

  // !access && para continuar simulacion
  // fin de simulacion


  const onSearch = ({ id }) => {
    fetch(`${process.env.REACT_APP_URL_BASE}/character/${id}?key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          
          setCharacters([
            ...characters,
            data
          ]);
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
    <div className='App'>
      {location.pathname !== '/' ? <NavBar onSearch={onSearch} /> : ''}
      <div>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path={`/detail/${id}`} element={<About />} />
          {/* <Route path={`/`} element={<Form login={login} />} /> */}
        </Routes>
      </div>
      <hr />
    </div>
  )
}