import React from 'react'

const Card = props => (
  <div>
    <img src={props.featuredThumbnail} alt={props.title} />
    <p>
        {props.title}
    </p>
  </div>
)

const renderCards = cards => (
  // We only want the first 9 elements for this grid
  cards.slice(0,9).map((e, i) => <Card key={i} {...e} />)
)

const Main = props => (
  <section className="text-center margin-top-lg">
    <p className="margin-bottom-sm title-font text-shadow">
      Destinos preferidos
    </p>
    <p className="margin-bottom-md subtitle-font text-shadow">
      Mira nuestros destinos favoritos alrededor del mundo
    </p>
    <div className="top-country-container">
      <section className="top-country-gridarea">
        { renderCards(props.data) }
      </section>
    </div>
  </section>
)

export default Main
