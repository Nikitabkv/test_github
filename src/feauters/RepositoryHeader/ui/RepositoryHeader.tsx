import s from "./RepositoryHeader.module.scss"
import {FC} from "react";

type TProps = {
  repository: {
    name: string
    pushedAt: string
    stargazerCount: number
  }
}

export const RepositoryHeader:FC<TProps> = ({repository}) => {

  return (
    <div className={s.header}>
      <div className={s.nameWrapper}>
        <h1>{repository.name}</h1>
      </div>
      <div className={s.headerInfo}>
        <h3>
          Последнее изменение:
        </h3>
        <span>
          {new Date(repository.pushedAt).toLocaleDateString()}
        </span>

        <h3>
          Звёзд:
        </h3>
        <span>
          {repository.stargazerCount} ⭐
        </span>
      </div>
    </div>
  )
}
