import s from './RepositoryPage.module.scss'
import {useEffect} from "react";
import {getRepoFx} from "../api/getRepo.ts";
import {useUnit} from "effector-react";
import {$isFetching, $repository} from "../model/model.ts"

export const RepositoryHeader = ({repository}) => {

  return (
    <div className={s.header}>
      <h1>{repository.name}</h1>
      <span>
        Последнее изменение: {new Date(repository.pushedAt).toLocaleDateString()}
      </span>
      <span>
        Звезд: {repository.stargazerCount} ⭐
      </span>
    </div>
  )
}

export const RepositoryUserInfo = ({repository}) => {

  return (
    <div className={s.ownerInfo}>
      <div className={s.ownerAvatar}>
        <img src={repository.owner.avatarUrl} alt=""/>
      </div>
      <h3>{repository.owner.login}</h3>
    </div>
  )
}

const getColorPercent = (allWeight: number, weight: number) => {
  return (weight / allWeight) * 100
}
export const RepositoryDetails = ({repository}) => {
  const totalSize = repository.languages.totalSize
  const color1 = {
    name: repository.languages.edges[0].node.color,
    size: getColorPercent(totalSize, repository.languages.edges[0].size)
  }
  const color2 = {
    name: repository.languages.edges[1].node.color,
    size: getColorPercent(totalSize, repository.languages.edges[0].size+repository.languages.edges[1].size)
  }
  const color3 = {
    name: repository.languages.edges[2].node.color,
    size: getColorPercent(totalSize, repository.languages.edges[0].size+repository.languages.edges[1].size+repository.languages.edges[2].size)
  }

  console.log(color1.size, color2.size, color3.size)

  return (
    <div className={s.repositoryDetails}>
      <div>
        <h3>Описание:</h3>
        <p>{repository.description}</p>
      </div>
      <div>
        <h3>Языки:</h3>
        <div
          className={s.langColors}
          style={{
            background: `
          linear-gradient(90deg, 
           ${color1.name} 0%, ${color1.name} ${color1.size}%,
           ${color2.name} ${color1.size}%, ${color2.name} ${color2.size}%, 
           ${color3.name} ${color2.size}%, ${color3.name} ${color3.size}%)
          `
          }}
        >
          <p>
            {repository.languages.edges.map((el) => {
              console.log(el)
              return (
                <span style={{
                  padding: '0 10px',
                  display: 'inline-block',
                  width: `${getColorPercent(totalSize, el.size)}%`
                }}>
                {el.node.name}
              </span>
              )
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export const RepositoryPage = () => {
  const [repository, isFetching] = useUnit([$repository, $isFetching])

  useEffect(() => {
    getRepoFx({
      name: 'kekstogramm',
      owner: 'nikitabkv',
    })
  }, []);

  return (
    <div className={s.repoWrapper}>
      {isFetching && 'Loading...'}
      {repository &&
          <>
              <RepositoryHeader repository={repository}/>
              <div className={s.divider}/>
              <div className={s.repositoryInfo}>
                  <RepositoryUserInfo repository={repository} />
                  <RepositoryDetails repository={repository}/>
              </div>
          </>
      }
    </div>
  )
}