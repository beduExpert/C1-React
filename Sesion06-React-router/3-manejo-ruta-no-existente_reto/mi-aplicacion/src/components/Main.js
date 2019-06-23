import React from 'react'
import Card from './Card';

const Main = props => {
  return (
    <section className="text-center margin-top-lg">
      <p className="margin-bottom-sm title-font text-shadow">
        Destinos preferidos
      </p>
      <p className="margin-bottom-md subtitle-font text-shadow">
        Mira nuestros destinos favoritos alrededor del mundo
      </p>
      <div className="top-country-container">
        <section className="top-country-gridarea">
          {props.data.map(d => {
            return (
              <Card
                key={d._id}
                image={d.featuredThumbnail}
                title={d.title}
                price={d.price}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Main;