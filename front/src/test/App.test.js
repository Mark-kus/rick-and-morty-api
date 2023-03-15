import '@testing-library/jest-dom'; // No necesario, recomendado, asersiones utiles
import React from 'react'; // Estos 2 primeros son usualmente configurados para auto importar en lugar de hacer manualmente
import {render, fireEvent, screen} from '@testing-library/react'; // Renderizar, hacer eventos, traer del dom
import App from '../App.js'; // El componente a testear