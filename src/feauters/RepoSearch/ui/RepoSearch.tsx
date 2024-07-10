import {useUnit} from "effector-react"
import {$repoSearch, changedRepoSearch, searchSubmitted} from "../../../pages/MainPage/model/model.ts"
import s from './RepoSearch.module.scss'

export const RepoSearch = () => {
  const [value, setValue, submitValue] = useUnit([$repoSearch, changedRepoSearch, searchSubmitted])

  return (
    <div className={s.inputWrapper}>
      <input className={s.searchInput} type="text" value={value}
             onChange={(e) => setValue(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && submitValue()}
      />
      <button onClick={submitValue}>
        Искать
      </button>
    </div>
  );
}
