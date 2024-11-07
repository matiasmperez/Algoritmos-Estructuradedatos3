import { FaLinkedin } from "react-icons/fa";
import "./Profesores.css";
import imagen from "./foto.jpg";

function Profesores() {
  const teachers = [
    { name: "Perez Matias", subject: "Estructura y Algoritmos III" },
  ];

  return (
    <div className="profesores-container">
      <h1 className="Titulo">Profesores</h1>
      <ul className="Sub-titulo">
        {teachers.map((teacher, index) => (
          <>
            <li className="Lista" key={index}>
              <img
                src={imagen}
                alt="Descripción de la imagen"
                style={{ margin: 10 }}
              />
              {teacher.name}
              <div style={{ margin: 5, display: "inline-flex", gap: 10 }}>
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/matias-perez-0819bb214/"
                >
                  <FaLinkedin fontSize={20} />
                </a>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Profesores;
