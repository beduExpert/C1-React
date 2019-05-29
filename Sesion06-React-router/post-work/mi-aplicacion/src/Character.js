import React from 'react'
import { withRouter } from 'react-router-dom'

import './Character.css'

function Character(props) {
  let data = {}

  const fromDetail = props.location.pathname.includes('detail')

  if (props.info) {
    data = {...props.info}
  } else if (props.location.state) {
    data = {...props.location.state}
  }

  const {id, image, name} = data

  const items = []

  for (const prop in data) {
    const e = <p key={prop}>{data[prop]}</p>

    if (
      Array.isArray(data[prop]) ||
      typeof data[prop] === 'object' ||
      prop === 'id' ||
      prop === 'url' ||
      prop === 'image'
      ) {
      continue
    }

    if (fromDetail) {
      items.push(e)
      continue
    }

    if (prop === 'name' || prop === 'species') {
      items.push(e)
    }
  }

  const onClick= fromDetail ? null
    : () => props.history.push(`/character/detail/${id}`, props.info)

  return (
    <div
      className={`Character ${fromDetail ? 'Detail' : ''}`}
      onClick={onClick}
    >
      <img src={image} alt={name} />
      <div className="Text">
        {items}
      </div>
    </div>
  )
}

export default withRouter(Character)
