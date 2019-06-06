import React from 'react'

const Venues = props => (
  <>
    <section id="country-cover">
      <h2>Destino</h2>
      <h3>Descripción</h3>
    </section>
    <section id="content">
      <aside id="column-left">
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
      </aside>
      <section id="central">
        <div className="tour-container">
          <div className="card-image-container">
            <img src="./assets/img/cdmx.jpeg" alt="alt here" />
          </div>
          <div className="card-content">
            <div>
              <h3>Tour por Ciudad de México</h3>
              <p className="margin-bottom-sm">Descripción del tour</p>
              <p className="margin-bottom-sm">
                Dive into the a unique world as you enter Guatemala,
                one of the most beautiful ... <span><a href="/">Read More</a></span>
              </p>

              <table className="table-info-tour">
                <tbody>
                  <tr>
                    <th>Starts /Ends </th>
                    <td>City/Guatemala City</td>
                  </tr>
                  <tr>
                    <th>Operator</th>
                    <td>Marvelus Travel</td>
                  </tr>
                  <tr>
                    <th>Tour Type</th>
                    <td>Group Tour</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <button className="button-tour">Ver tour</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </>
)

export default Venues
