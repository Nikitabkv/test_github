import s from "./RepositoryHeader.module.scss"

export const RepositoryHeader = ({repository}) => {

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
