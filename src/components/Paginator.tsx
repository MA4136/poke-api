import React from 'react';
import {cx} from "@emotion/css";
import {list, listItem, btn} from "./paginator-emotion-styles";

interface IPaginatorProps {
  counter: number,
  currentPage: number
  setPage: any,
  prevPage: any,
  nextPage: any
}

const Paginator = ({counter, currentPage, setPage, prevPage, nextPage}: IPaginatorProps) => {
  let pages = Array.from({length: counter}, (_, idx) => ++idx)

  if (currentPage >= 11) {
    pages = [...pages.slice(currentPage - 6, currentPage), ...pages.slice(currentPage, currentPage + 5)]
  } else {
    pages = pages.slice(0, 11)
  }

  const pagesList = pages.map((el) => {
    return (
      <li className={cx(listItem, currentPage === el ? 'isActive' : '')}
          key={el}
          onClick={() => setPage(el)}
      >
        {el}
      </li>
    );
  })

  return (
    <ul className={list}>
      <button className={cx(btn, currentPage <= 1 ? "disabled" : '')}
              onClick={() => prevPage()}>Prev
      </button>
      {pagesList}
      <button className={cx(btn, currentPage === counter ? "disabled" : '')}
              onClick={() => nextPage()}>Next
      </button>
    </ul>
  )
}

export default Paginator;