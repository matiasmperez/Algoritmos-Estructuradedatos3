import "./Testimonios.css";

function Testimonios() {
  return (
    <>
      <div className="profesores-container">
        <h1 classname="Titulo">Testimonios</h1>
      </div>

      <div className="testimonios-container">
        <div className="testimonio">
          <div className="cuadro-gris">
            <div className="texto-testimonio">
              <div className="nombre">Ana González</div>
              <div className="cargo">Docente Analista de sistemas 2022</div>
              <p>
                "Buen ambiente y atencion de los alumnos, en esta materia se da
                mucho aprendizaje."
              </p>
            </div>
          </div>
        </div>

        <div className="testimonio">
          <div className="cuadro-gris">
            <div className="texto-testimonio">
              <div className="nombre">Carlos Ruiz</div>
              <div className="cargo">Egresado Analista de sistemas 2024</div>
              <p>
                "La materia es llevadera, ademas de la buena atencion de los
                docentes ¡Muy recomendable!"
              </p>
            </div>
          </div>
        </div>

        <div className="testimonio">
          <div className="cuadro-gris">
            <div className="texto-testimonio">
              <div className="nombre">Laura Martínez</div>
              <div className="cargo">Egresada Analista de sistemas 2023</div>
              <p>"Buenos contenidos y clases de la materia."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonios;
