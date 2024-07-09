import RepoItem from "../../../feauters/RepoItem"
import {$repos} from "../../../pages/MainPage/model/model.ts"
import {useUnit} from "effector-react";

export const RepoList = () => {
  const [repos] = useUnit([$repos])

  return (
    <div>
      <h1>Список репозиториев:</h1>
      <div className={'repoList'}>
        {repos.map((el) => (
         <RepoItem el={el} />
        ))}
      </div>
      <div>
        <h2>Страницы</h2>
        <div>
          [
          {repos.map((repo, index) => {
            if (index % 10 === 0) {
              return (
                <span key={index}> {index + 1} </span>
              );
            }
            return null;
          })}
          ]
        </div>
      </div>
    </div>
  );
}
