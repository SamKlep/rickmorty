import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CharacterGrid from './components/character/CharacterGrid'
import Header from './components/ui/Header'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character`
      )

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className=''>
      <Header />
      <div className='container'>
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  )
}

export default App
