import {createEvent, createStore, sample} from "effector"

import {getReposFx} from "../api/getRepos.ts"

export const $repoSearch = createStore('')
export const $repos = createStore([])

export const changedRepoSearch = createEvent<string>()
export const searchSubmitted = createEvent<void>()

$repoSearch.on(changedRepoSearch, (_, value) => value)

$repos.on(getReposFx.doneData, (_, value) => value)

sample({
  clock: searchSubmitted,
  source: $repoSearch,
  target: getReposFx,
})
