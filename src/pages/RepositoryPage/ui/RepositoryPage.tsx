import s from './RepositoryPage.module.scss'
import {useEffect} from "react"
import {getRepoFx} from "../api/getRepo.ts"
import {useUnit} from "effector-react"
import {$isFetching, $repository} from "../model/model.ts"
import RepositoryHeader from "../../../feauters/RepositoryHeader"
import RepositoryUserInfo from "../../../feauters/RepositoryUserInfo"
import RepositoryDetails from "../../../feauters/RepositoryDetail"

export const RepositoryPage = () => {
  const [repository, isFetching] = useUnit([$repository, $isFetching])

  useEffect(() => {
    getRepoFx({
      name: 'test_github',
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