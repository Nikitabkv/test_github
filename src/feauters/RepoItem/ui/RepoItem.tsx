import s from './RepoItem.module.scss'
import {Link} from "react-router-dom";
import {FC} from "react";

type TRepoItem = {
  key: number
  el: {
    name: string
    owner: {
      login: string
    }
    html_url: string
    description: string
    nameWithOwner: string
    stargazerCount: number
    pushedAt: string
    url: string
  }
}

export const RepoItem:FC<TRepoItem> = ({el}) => {

  return (
    <Link to={`repository/${el.nameWithOwner}`}>
      <div className={s.repoItem}>
      <span>
        Название: {el.name}
      </span>
        <span>
        Звезд: {el.stargazerCount}⭐
      </span>
        <span>
        Последний коммит: {el.pushedAt.slice(0, 10)}
      </span>
        <span>
        Ссылка: {el.url}
      </span>
      </div>
    </Link>
  )
}
