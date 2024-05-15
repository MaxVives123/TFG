import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import emailjs from 'emailjs-com';

export default function WithContactForm() {
  // Custom styling for inputs and textarea
  const inputStyle = {
    backgroundColor: '#ccc', // Grey background
    color: 'white' // White text
  };

  function handleSubmit(event) {
    event.preventDefault(); // Evita l'enviament per defecte del formulari

    // Envia les dades del formulari a través de EmailJS
    emailjs.sendForm('service_daaxeus', 'template_npfrmsa', event.target, 'pxvq4OXs5urIbaFrF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <MDBContainer className="mt-5" style={{ maxWidth: '1000px', color: 'white' }}>
      <section>
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4">
            <div>
              <p className="mb-1">
                <strong>What is the history of the construction of the church of Sant Quirze de Pedret?</strong>
              </p>
              <p className="mb-1">
                <u>A construction dating back to the 9th century.</u> Below are some key points of its historical development:
              </p>
              <ul>
                <li>Origins in the 9th century as a simple structure.</li>
                <li>Significant reforms and expansions during the 10th and 11th centuries.</li>
                <li>Important Romanesque artworks added in the 12th century.</li>
              </ul>
            </div>

            <div>
              <p className="mb-1">
                <strong>What architectural elements stand out in Sant Quirze de Pedret?</strong>
              </p>
              <p className="mb-1">
                <u>Decorated apses and horseshoe arches.</u>
              </p>
              <p className="mb-1">
                Features of the pre-Romanesque and transitions to the Romanesque visible in its frescoes and structures.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>
                  What do the frescoes found in the church of Sant Quirze de Pedret mean?
                </strong>
              </p>
              <p className="mb-1">
                <u>Representations rich in religious symbolism.</u>
              </p>
              <p className="mb-1">
                The frescoes include images of saints, scenes from the Old Testament, and the Final Judgment.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>What has been the impact of the restorations on the church?</strong>
              </p>
              <p className="mb-1">
                <u>Careful restorations have preserved its historical value.</u>
              </p>
              <p className="mb-1">
                These have allowed for the recovery and maintenance of the integrity of its frescoes and architecture.
              </p>
            </div>
          </MDBCol>
          <MDBCol lg="6" md="12" className="text-center">
            <p>
              <span className="fw-bold">
              Email Adress
              </span>
            </p>

            <form onSubmit={handleSubmit}>
              <MDBInput name="email" label="Still have questions? Contact us for more information!" required className="mb-4" style={inputStyle} />
              <MDBTextArea name="message" rows={4} label="" className="mb-4" style={inputStyle} />
              <MDBBtn type="submit" block style={{ backgroundColor: 'white', color: '#212529' }}>Enviar</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
