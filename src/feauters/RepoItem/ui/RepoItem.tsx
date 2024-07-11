import s from './RepoItem.module.scss'
import {Link} from "react-router-dom";

export const RepoItem = ({el}) => {

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
