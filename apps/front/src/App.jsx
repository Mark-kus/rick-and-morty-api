import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error/Error.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Favs from "./components/Favs/Favs";
import { Routes, Route, useLocation } from "react-router-dom";
import { deleteFav, getFavs } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/redux.js";
import axiosInstance from "./redux/axios.js";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searching, setSearching] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;
  const routes = ["/home", "/about", "/", "/favorites"];
  const myFavorites = useAppSelector((state) => state.myFavorites);
  const charactersAmount = 826;

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  const onSearch = ({ id }) => {
    if (!searching) setSearching(true);

    if (characters.length === charactersAmount) {
      alert("No hay más cartas que añadir");
      return null;
    }
    axiosInstance.get(`/onsearch/${id}`)
      .then((response) => {
      const data = response.data;
      if (data.name) {
        let repeated = false;
        if (characters.length > 0) {
        characters.forEach((elem) => {
          if (elem.id === data.id) {
          alert("Esa carta ya existe");
          repeated = true;
          }
        });
        }
        if (!repeated) {
        if (characters.length > 0) {
          setCharacters([...characters, data]);
        } else {
          setCharacters([data]);
        }
        }
        setSearching(false);
      } else {
        onSearchRandom();
      }
      })
      .catch((error) => {
      console.error("Error fetching character:", error);
      setSearching(false);
      });
  };

  const onSearchRandom = () => {
    if (!searching) setSearching(true);
    if (characters.length === charactersAmount) {
      alert("No hay más cartas que añadir");
      return null;
    }
    let random = Math.floor(Math.random() * charactersAmount + 1);
    if (characters.length > 0) {
      characters.forEach((elem) => {
        if (elem.id === random) {
          random = onSearchRandom();
        }
      });
    }
    onSearch({ id: random });
  };

  const onClose = (idCharacter) => {
    const newCharacters = characters.filter(
      (character) => character.id !== idCharacter
    );
    setCharacters([...newCharacters]);
    dispatch(deleteFav(idCharacter));
  };

  return (
    <div className="allContainer">
      {(routes.includes(path) || path.includes("/detail")) && (
        <NavBar
          searching={searching}
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
        />
      )}
      <div className="App">
        <div className="pathContainer">
          <Routes>
            <Route
              path="/"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/favorites"
              element={<Favs characters={myFavorites} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail characters={[...characters]} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
      {(routes.includes(path) || path.includes("/detail")) && <Footer />}
    </div>
  );
}
