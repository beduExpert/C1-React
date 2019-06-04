import React from 'react';

function Print(props) {
  const books = props.books.map((b, i) => {
    return <p key={i}>{b.title}</p>
  })

  return (
    <>
      {books}
    </>
  )
}

export default Print
