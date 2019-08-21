import React from 'react'

const Card = props => (
  <div className="tour-container">
    <div className="card-image-container">
      <img src={props.featuredThumbnail} alt={props.title} />
    </div>
    <div className="card-content">
      <div>
        <h3>{props.title}</h3>
        <p className="margin-bottom-sm">Descripción del tour</p>
        <p className="margin-bottom-sm">
          {props.summary}...
          <span><a href="/">Read More</a></span>
        </p>
        <table className="table-info-tour">
          <tbody>
            <tr>
              <th>Starts/Ends </th>
              <td>Marruecos/México</td>
            </tr>
            <tr>
              <th>Operator</th>
              <td>{props.operatorId}</td>
            </tr>
            <tr>
              <th>Tour Type</th>
              <td>{props.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <button className="button-tour">Ver tour</button>
      </div>
    </div>
  </div>
)

const renderCards = cards => (
  cards.slice(0,5).map((e, i) => <Card key={i} {...e}/>)
)

const Filter = props => (
  <>
    <p className="margin-bottom-sm">Filtrar por:</p>
    <input className="margin-bottom-sm" type="text" />
    <div className="margin-bottom-sm">
      <p>Destinos</p>
        <ul>
          <li>
            <input type="checkbox" id="fruit4" />
            <label htmlFor="fruit4">Antigua</label>
          </li>
          <li>
            <input type="checkbox" id="fruit4" />
            <label htmlFor="fruit4">Guatemala City</label>
          </li>
          <li>
            <input type="checkbox" id="fruit4" />
            <label htmlFor="fruit4">Panajachel</label>
          </li>
          <li>
            <input type="checkbox" id="fruit4" />
            <label htmlFor="fruit4">Flores</label>
          </li>
          <li>
            <input type="checkbox" id="fruit4" />
            <label htmlFor="fruit4">San Jorge La Laguna</label>
          </li>
        </ul>
    </div>
    <div className="margin-bottom-sm">
      <p>Destinos</p>
      <ul>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Antigua</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Guatemala City</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Panajachel</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Flores</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">San Jorge La Laguna</label>
        </li>
     </ul>
    </div>
    <div className="margin-bottom-sm">
      <p>Destinos</p>
      <ul>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Antigua</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Guatemala City</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Panajachel</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">Flores</label>
        </li>
        <li>
          <input type="checkbox" id="fruit4" />
          <label htmlFor="fruit4">San Jorge La Laguna</label>
        </li>
      </ul>
    </div>
  </>
)

const Venues = props => (
  <>
    <section id="country-cover">
      <h2>Destino</h2>
      <h3>Descripción</h3>
    </section>
    <section id="content">
      <aside id="column-left">
        <Filter />
      </aside>
      <section id="central">
        { renderCards(props.data) }
      </section>
    </section>
  </>
)

export default Venues
