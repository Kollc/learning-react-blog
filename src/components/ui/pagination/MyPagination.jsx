import React from 'react'

function MyPagination({pagesArray, page, setPage}) {
  return (
    <div className="page__wrapper">
          {pagesArray.map(p =>
          <span key={p} className={p === page  ? 'page__item page__item--current' : 'page__item'} onClick={() => setPage(p)}>
            {p}
          </span>)}
        </div>
  )
}

export default MyPagination
