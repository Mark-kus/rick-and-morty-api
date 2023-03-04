import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx'
import Error from './components/Error/Error.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form';
import video from './space.mp4';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const myFavorites = useSelector(state => state.myFavorites)
  const charactersAmount = 826;
  
  // simulacion de seguridad
  
  const [access, setAccess] = useState(false);
  const username = 'tignanellimarco@gmail.com';
  const password = 'alphabeta';
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    access && navigate('/');
  }, [access]);

  // !access para simular, access para no
  // fin de simulacion


  const onSearch = ({ id }) => {
    if (characters.length === charactersAmount) {
      alert('No hay más cartas que añadir');
      return null;
    }
    fetch(`${process.env.REACT_APP_URL_BASE}/character/${id}?key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repeated = false;
          if (characters.length > 0) {
            characters.forEach((elem) => {
              if (elem.id === data.id) {
                alert('Esa carta ya existe');
                repeated = true;
              }
            })
          }
          if (!repeated) {
            if (characters.length > 0) {
              setCharacters([
                ...characters,
                data
              ]);
            } else {
              setCharacters([
                data
              ]);
            }
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onSearchRandom = () => {
    if (characters.length === charactersAmount) {
      alert('No hay más cartas que añadir')
      return null;
    }
    let random = Math.floor(Math.random() * charactersAmount + 1);
    if (characters.length > 0) {
      characters.forEach((elem) => {
        if (elem.id === random) {
          random = onSearchRandom();
        }
      })
    }
    onSearch({ id: random });
  }

  const onClose = (idCharacter) => {
    const newCharacters = characters.filter((character) => character.id !== idCharacter);
    setCharacters([
      ...newCharacters
    ]);
  }

  return (
    <div className='App'>
      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      {location.pathname !== '/' ? <NavBar onSearch={onSearch} onSearchRandom={onSearchRandom} /> : ''}
      <div className='container'>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Cards characters={myFavorites} />} />
          <Route path='/detail/:id' element={<Detail characters={characters} />} />
          <Route exact path='/' element={<Form login={login} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  )
}