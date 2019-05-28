import React from 'react'

function Random(props) {
  return(
    <>
      <p>El texto que fue puesto en el input fue:
        <i>{' ' + props.match.params.text}</i> y el número generado fue:
        <i>{' ' + props.location.state}</i>
      </p>
    </>
  )
}

export default Random
