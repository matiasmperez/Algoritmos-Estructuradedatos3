import "./Objetivo.css";

function Objetivo() {
  return (
    <div className="objetivo-container">
      <h2 className="objetivo-title">Objetivos de la materia</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3 className="objetivo-subtitle">
            Algoritmos y Estructuras de Datos I:
          </h3>
          <p className="objetivo-paragraph">
            Este módulo se propone acercar a los alumnos a adquirir herramientas
            para resolver problemas por medio de algoritmos y su respectiva
            representación a través de estructuras de datos. Para ello, se
            trabaja a partir de diferentes situaciones problemáticas y se busca
            encontrar soluciones algorítmicas. Esto permitirá adquirir el
            concepto de abstracción para lograr modelizar los datos de un
            problema en una estructura de datos.
          </p>
          <ul className="objetivo-list">
            <li className="objetivo-list-item">
              Identificar y resolver problemas propios de los sistemas de
              información a partir de soluciones algorítmicas.
            </li>
            <li className="objetivo-list-item">
              Implementar los algoritmos y representarlos a través de
              estructuras de datos.
            </li>
            <li className="objetivo-list-item">
              Incorporar la abstracción para modelizar datos de un problema en
              una estructura.
            </li>
          </ul>
        </div>

        <div className="timeline-item">
          <h3 className="objetivo-subtitle">
            Algoritmos y Estructuras de Datos II:
          </h3>
          <p className="objetivo-paragraph">
            Este módulo considera lo abordado en Algoritmos y Estructuras de
            Datos I. En tal sentido, se propone acercar a los alumnos a los
            distintos paradigmas que ofrece la programación, profundizando en
            aspectos de la programación orientada a objetos sus componentes y
            técnicas.
          </p>
          <ul className="objetivo-list">
            <li className="objetivo-list-item">
              Conocer los distintos paradigmas de la programación.
            </li>
            <li className="objetivo-list-item">
              Conocer y utilizar el paradigma de objetos, sus características,
              ventajas y aplicaciones dentro del desarrollo de sistemas.
            </li>
            <li className="objetivo-list-item">
              Adquirir técnicas de resolución de problemas reales.
            </li>
            <li className="objetivo-list-item">
              Diseñar aplicaciones con frameworks orientados a objetos.
            </li>
          </ul>
        </div>

        <div className="timeline-item">
          <h3 className="objetivo-subtitle">
            Algoritmos y Estructuras de Datos III:
          </h3>
          <p className="objetivo-paragraph">
            Este módulo presenta una profundización de la materia Algoritmos y
            estructura de datos I y II. Se conoce que el mundo real tiene
            problemas que no se pueden modelar con estructuras de datos simples,
            por eso es que se requieren de estructuras no lineales y recursivas.
          </p>
          <ul className="objetivo-list">
            <li className="objetivo-list-item">
              Conocer los fundamentos matemáticos de las estructuras de datos.
            </li>
            <li className="objetivo-list-item">
              Utilizar herramientas algorítmicas para la resolución de problemas
              reales.
            </li>
            <li className="objetivo-list-item">
              Modelar problemas del mundo real con estructuras de datos no
              lineales y recursivas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Objetivo;
