import React from 'react';
import CarouselPage from './CarouselPage';
import BarraNavegacion from './NavBar';

const FAQ = () => {
  return (
    <div className='faq-container'>
        <h1 style={{ color: '#007bff' }}>Preguntes Freqüents - Església de Sant Quirze de Pedret</h1>
        <div style={{ marginTop: '20px' }}>
          <h2>Quina és la història de l'Església de Sant Quirze de Pedret?</h2>
          <p>
            L'Església de Sant Quirze de Pedret és una antiga església romànica situada a Catalunya, Espanya.
            La seva construcció data del segle IX i és famosa pels seus frescos romànics i la seva arquitectura única
            que reflecteix les transicions d'estil al llarg dels segles.
          </p>

          <h2>Quins elements arquitectònics destaquen a Sant Quirze de Pedret?</h2>
          <p>
            Sant Quirze de Pedret és notable pels seus murals romànics i elements visigòtics.
            L'església té una estructura de tres naus i una sèrie d'arcs que són característics de
            l'estil romànic, amb influències visigòtiques evidents en la decoració i els capitells.
          </p>

          <h2>Es pot visitar l'església?</h2>
          <p>
            Sí, l'església està oberta per a visites turístiques, encara que els horaris poden variar.
            Es recomana verificar els horaris actualitzats a la pàgina web oficial o contactar
            amb l'oficina de turisme local per obtenir més detalls.
          </p>

          <h2>Hi ha activitats o esdeveniments especials a l'església?</h2>
          <p>
            L'església sovint acull esdeveniments culturals i concerts, especialment durant l'estiu.
            Aquests esdeveniments són una gran oportunitat per gaudir de l'entorn històric mentre es participa
            en activitats culturals.
          </p>
        </div>
    </div>
  )
}

export default FAQ;
