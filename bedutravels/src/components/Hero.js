import React from 'react'

const Hero = props => (
  <section id="home-cover">
    <div>
      <p className="margin-bottom-sm title-font text-shadow">
        Increibles tours alrededor del mundo
      </p>
      <p className="margin-bottom-md subtitle-font text-shadow">
        Encuentra grandes experiencias,
        viajes, y actividades a precios fantasticos
        alrededor del mundo
      </p>
    </div>
    <div className="searchbar">
      <input type="text" placeholder="¿A dónde vas?... " />
      <button className="search-button" type="button">
        <i className="fas fa-search" />
      </button>
    </div>
  </section>
)

export default Hero
