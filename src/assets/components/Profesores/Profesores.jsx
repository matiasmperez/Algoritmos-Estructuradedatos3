import "./Profesores.css";
import imagen from "./foto.jpg"

function Profesores() {
  const teachers = [
    { name: "Matías Pérez", subject: "Estructura y Algoritmos III" },
  ];

  return (
    <div className="profesores-container">
      <h1>Profesores</h1>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>
            {teacher.name} - {teacher.subject}
          </li>
        ))}
      </ul>
      <img src={imagen} alt="Descripción de la imagen" />
    </div>
  );
}

export default Profesores;
