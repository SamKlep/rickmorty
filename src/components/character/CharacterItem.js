import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item)
  return (
    <div>
      <div class='card' style={{ width: '18rem' }}>
        <img class='card-img-top' src={item.image} alt='card' />
        <div class='card-body'>
          <h5 class='card-title'>{item.name}</h5>
          <p class='card-text'>{item.species}</p>

          <a href='/' class='btn btn-primary'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
