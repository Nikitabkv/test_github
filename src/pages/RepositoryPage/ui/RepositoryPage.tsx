import s from './RepositoryPage.module.scss'
import {useEffect} from "react"
import {getRepoFx} from "../api/getRepo.ts"
import {useUnit} from "effector-react"
import {$isFetching, $repository, removeRepo} from "../model/model.ts"
import RepositoryHeader from "../../../feauters/RepositoryHeader"
import RepositoryUserInfo from "../../../feauters/RepositoryUserInfo"
import RepositoryDetails from "../../../feauters/RepositoryDetail"
import {Link, useParams} from "react-router-dom";

export const RepositoryPage = () => {
  const [repository, isFetching, back] = useUnit([$repository, $isFetching, removeRepo])
  const params = useParams()

  useEffect(() => {
    getRepoFx({
      name: params.name,
      owner: params.owner,
    })
  }, [])

  return (
    <div className={s.repoWrapper}>
      {isFetching && 'Loading...'}
      {repository &&
          <>
              <Link to={'/'} onClick={() => back()}> | Back | </Link>
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