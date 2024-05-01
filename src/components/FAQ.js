import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function WithContactForm() {
  // Estilo personalizado para inputs y textarea
  const inputStyle = {
    backgroundColor: '#ccc', // Fondo gris
    color: 'white' // Texto blanco
  };

  return (
    <MDBContainer className="mt-5" style={{ maxWidth: '1000px', color: 'white' }}>
      <section>
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4">
            <div>
              <p className="mb-1">
                <strong>¿Cuál es la historia de la construcción de la iglesia de Sant Quirze de Pedret?</strong>
              </p>
              <p className="mb-1">
                <u>Una construcción que data del siglo IX.</u> A continuación, algunos puntos clave de su desarrollo histórico:
              </p>
              <ul>
                <li>Orígenes en el siglo IX como una simple estructura.</li>
                <li>Reformas y expansiones significativas durante los siglos X y XI.</li>
                <li>Importantes obras de arte románico añadidas en el siglo XII.</li>
              </ul>
            </div>

            <div>
              <p className="mb-1">
                <strong>¿Qué elementos arquitectónicos destacan en Sant Quirze de Pedret?</strong>
              </p>
              <p className="mb-1">
                <u>Absides decorados y arcos de herradura.</u>
              </p>
              <p className="mb-1">
                Características del prerrománico y transiciones al románico visible en sus frescos y estructuras.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>
                  ¿Qué significan los frescos encontrados en la iglesia de Sant Quirze de Pedret?
                </strong>
              </p>
              <p className="mb-1">
                <u>Representaciones ricas en simbolismo religioso.</u>
              </p>
              <p className="mb-1">
                Los frescos incluyen imágenes de santos, escenas del Antiguo Testamento y el Juicio Final.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>¿Cuál ha sido el impacto de las restauraciones en la iglesia?</strong>
              </p>
              <p className="mb-1">
                <u>Restauraciones cuidadosas han preservado su valor histórico.</u>
              </p>
              <p className="mb-1">
                Estas han permitido recuperar y mantener la integridad de sus frescos y arquitectura.
              </p>
            </div>
          </MDBCol>
          <MDBCol lg="6" md="12" className="text-center">
            <p>
              <span className="fw-bold">
                ¿Todavía tienes preguntas? ¡Contáctanos para obtener más información!
              </span>
            </p>

            <form>
              <MDBInput label="Dirección de correo electrónico" required className="mb-4" style={inputStyle} />
              <MDBTextArea rows={4} label="" className="mb-4" style={inputStyle} />
              <MDBBtn block style={{ backgroundColor: 'white', color: '#212529' }}>Enviar</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
