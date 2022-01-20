import React, {useState} from 'react';
import './App.css';
import useSWR from "swr";
import {fetcher} from "./api";
import Pokemon from "./components/Pokemon";
import Paginator from "./components/Paginator";

const ITEMS_PER_PAGE: number = 20

function App() {
  const [skip, setSkip] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const {data} = useSWR(
    `https://pokeapi.co/api/v2/pokemon?offset=${skip}&limit=${ITEMS_PER_PAGE}`,
    fetcher
  )

  const pagesCounter = data ? Math.ceil(data.count / ITEMS_PER_PAGE) : 0

  const setPageNumber = (page: number) => {
    setSkip((page - 1) * ITEMS_PER_PAGE)
    setCurrentPage(page)
  }

  const onPrevPage = () => {
    setPageNumber(currentPage - 1)
  }

  const onNextPage = () => {
    setPageNumber(currentPage + 1)
  }

  const list = data?.results.map((el: any, idx: number) => {
    const index = skip + idx + 1
    return (
      <Pokemon name={el.name} index={index} key={el.name}/>
    )
  })

  return (
    <div className="App">
      <h1><a href="https://pokeapi.co/" target='_blank' rel="noreferrer" >PokeApi</a></h1>
      <Paginator counter={pagesCounter}
                 currentPage={currentPage}
                 setPage={setPageNumber}
                 prevPage={onPrevPage}
                 nextPage={onNextPage}
      />
      {data ? list : <p>...loading...</p>}
    </div>
  )
}

export default App;