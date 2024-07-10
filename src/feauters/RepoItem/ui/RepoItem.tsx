import s from './RepoItem.module.scss'

export const RepoItem = ({el}) => {

  return (
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
        Ссылка: <a href={el.url}>{el.url}</a>
      </span>
    </div>
  );
}
