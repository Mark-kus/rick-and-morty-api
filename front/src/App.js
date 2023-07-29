import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Error from './components/Error/Error.jsx'
import Detail from './components/Detail/Detail.jsx'
import Favs from './components/Favs/Favs';
import video from './assets/backgroundDesktop.mp4';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFav, getFavs } from './redux/actions';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const routes = ['/home', '/about', '/', '/favorites']
  const myFavorites = useSelector(state => state.myFavorites)
  const charactersAmount = 826;

  useEffect(() => {
    dispatch(getFavs());
  }, []);

  const onSearch = ({ id }) => {
    if (characters.length === charactersAmount) {
      alert('No hay más cartas que añadir');
      return null;
    }
    fetch(`http://localhost:3001/onsearch/${id}`)
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
          onSearchRandom();
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
    dispatch(deleteFav(idCharacter));
  }

  return (
    <div className='allContainer'>
      {routes.includes(path) || path.includes('/detail') ?
        <video id="background-video" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        : ''}
      {routes.includes(path) || path.includes('/detail') ?
        <NavBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
        : ''}
      <div className='App'>
        <div className='pathContainer'>
          <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favs characters={myFavorites} />} />
            <Route path='/detail/:id' element={<Detail characters={[...characters]} />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
      {routes.includes(path) || path.includes('/detail') ?
        <Footer />
        : ''}
    </div>
  )
}