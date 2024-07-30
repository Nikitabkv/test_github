import {useUnit} from "effector-react"
import {$page, pageChanged} from "../../../pages/MainPage/model/model.ts"
import {FC} from "react";

type RepoPaginatorProps = {
  repos: Array<never>
}

export const RepoPaginator:FC<RepoPaginatorProps> = ({repos}) => {
  const [page, changePage] = useUnit([$page, pageChanged])

  return (
    <>
      <h2>Страницы</h2>
      <div>
        {/*тут хотел зачем-то использовать репу, потому мап*/}
        {repos.map((_, index: number) => {
          if (index % 10 === 0) {
            return (
              <span
                key={index}
                style={{padding: '3px', fontWeight: page === index / 10 + 1 ? 'bold' : '', cursor: 'pointer', color: page === index / 10 + 1 ? '#646cff' : ''}}
                onClick={() => changePage(index / 10 + 1)}
              >
                {index / 10 + 1}
              </span>
            )
          }
          return null
        })}
      </div>
    </>
  )
}
