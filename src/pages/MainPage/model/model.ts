import {createEvent, createStore, sample} from "effector"

import {getReposFx, getUserReposFx} from "../api/getRepos.ts"

export const $repoSearch = createStore('')
export const $repos = createStore([])
export const $userRepos = createStore([])
export const $page = createStore(1)

export const changedRepoSearch = createEvent<string>()
export const searchSubmitted = createEvent<void>()
export const pageChanged = createEvent<number>()
export const pageLoaded = createEvent<never>()

export const $isFetching = createStore(true)

$repoSearch.on(changedRepoSearch, (_, value) => value)
$repos.on(getReposFx.doneData, (_, value: never) => value)
$userRepos.on(getUserReposFx.doneData, (_, value: never) => value)
$page.on(pageChanged, (_, value) => value)
$page.on(searchSubmitted, () => 1)


sample({
  clock: [getReposFx.pending, getUserReposFx.pending],
  source: getReposFx.pending || getUserReposFx.pending,
  target: $isFetching
})

sample({
  clock: searchSubmitted,
  source: $repoSearch,
  target: getReposFx,
})

sample({
  clock: pageLoaded,
  target: getUserReposFx,
})
