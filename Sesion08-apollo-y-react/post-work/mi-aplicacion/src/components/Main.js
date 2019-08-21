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
          {props.data.tours && props.data.tours.map(d => {
            return (
              <Card
                key={d._id}
                image={d.featuredThumbnail || 'https://via.placeholder.com/200'}
                title={d.title}
                price={d.departures[0].price}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Main;
