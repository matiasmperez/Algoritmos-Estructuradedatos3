import "./App.css";
import Objetivo from "./assets/components/Objetivo/Objetivo";
import Portada from "./assets/components/Portada/Portada";
import RecursosyMateriales from "./assets/components/Recursosymateriales/RecursosyMateriales";
import Profesores from "./assets/components/Profesores/Profesores";
import Testimonios from "./assets/components/Testimonios/Testimonios";

function App() {
  return (
    <>
      <h1>Algoritmos & Estructura de datos 3</h1>
      <Portada></Portada>
      <Objetivo></Objetivo>
      <RecursosyMateriales></RecursosyMateriales>
      <Profesores></Profesores>
      <Testimonios></Testimonios>
    </>
  );
}

export default App;