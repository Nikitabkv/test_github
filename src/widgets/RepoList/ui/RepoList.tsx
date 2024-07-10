import RepoItem from "../../../feauters/RepoItem"
import {$isFetching, $page, $repos, $repoSearch, $userRepos, pageLoaded} from "../../../pages/MainPage/model/model.ts"
import {useUnit} from "effector-react"
import RepoPaginator from "../../../feauters/RepoPaginator"
import {useEffect, useState} from "react";

export const RepoList = () => {
  const [repos, userRepos, repoSearch, isFetching, page, pageLoad] = useUnit([$repos, $userRepos, $repoSearch, $isFetching, $page, pageLoaded])
  const [currentRepos, setCurrentRepos] = useState(userRepos)

  useEffect(() => {
    pageLoad()
  }, []);

  useEffect(() => {
    console.log(isFetching)
    if (repoSearch && repos.length !== 0) {
      setCurrentRepos(repos)
    } else {
      setCurrentRepos(userRepos)
    }
  }, [repos, userRepos, repoSearch, isFetching]);

  return (
    <div>
      <h1 onClick={() => console.log(userRepos)}>Список репозиториев:</h1>
      {isFetching ? 'Загрузка...' : (
        <>
          <div className={'repoList'}>
            {currentRepos.map((el, index) => {
              const start = (page - 1) * 10 + 1;
              const end = page * 10;

              if (index + 1 >= start && index + 1 <= end) {
                return <RepoItem key={index} el={el} />;
              }
            })}
          </div>
          <div>
            {currentRepos.length > 10 && <RepoPaginator repos={currentRepos}/>}
          </div>
        </>
      )}
    </div>
  );
}
