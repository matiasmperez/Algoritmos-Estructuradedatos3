import "./Objetivo.css";

function Objetivo() {
  return (
    <div className="objetivo-container">
      <div className="objetivo-content">
        <h2 className="objetivo-title">Objetivos de la materia</h2>
        <h3 className="objetivo-subtitle">
          Algoritmos y Estructuras de Datos I:
        </h3>
        <p className="objetivo-paragraph">
          Este módulo se propone acercar a los alumnos a adquirir herramientas
          para resolver problemas por medio de algoritmos y su respectiva
          representación a través de estructuras de datos. Para ello, se trabaja
          a partir de diferentes situaciones problemáticas y se busca encontrar
          soluciones algorítmicas. Esto permitirá adquirir el concepto de
          abstracción para lograr modelizar los datos de un problema en una
          estructura de datos.
          <br />
          Se espera que al finalizar el cursado del módulo los estudiantes sean
          capaces de:
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
        </p>

        <h3 className="objetivo-subtitle">
          Algoritmos y Estructuras de Datos II:
        </h3>
        <p className="objetivo-paragraph">
          Este módulo considera lo abordado en Algoritmos y Estructuras de Datos
          I. En tal sentido, se propone acercar a los alumnos a los distintos
          paradigmas que ofrece la programación, profundizando en aspectos de la
          programación orientada a objetos sus componentes y técnicas.
          Particularmente, el paradigma de programación orientado a objetos les
          brinda a los futuros profesionales, técnicos que combinan la
          abstracción, modularización, encapsulamiento, polimorfismo y herencia.
          Así, la combinación de estos aspectos promueve una forma de resolver
          problemas, no abstracta, sino más cercana a la realidad. <br />
          Se espera que al finalizar el cursado del módulo los estudiantes sean
          capaces de:
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
        </p>

        <h3 className="objetivo-subtitle">
          Algoritmos y Estructuras de Datos III:
        </h3>
        <p className="objetivo-paragraph">
          Este módulo presenta una profundización de la materia Algoritmos y
          estructura de datos I y II. Se conoce que el mundo real tiene
          problemas que no se pueden modelar con estructuras de datos simples,
          por eso es que se requieren de estructuras no lineales y recursivas.
          En esta materia se abordan esas estructuras de datos, sus fundamentos
          matemáticos y utilización. Asimismo, se abordarán estructuras de datos
          recursivas, que presentan mayor nivel de complejidad y son más
          eficientes. <br />
          Se espera que al finalizar el cursado del módulo los estudiantes sean
          capaces de:
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
        </p>
      </div>
    </div>
  );
}

export default Objetivo;
