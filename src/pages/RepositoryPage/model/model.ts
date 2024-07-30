import {createEvent, createStore, sample} from "effector"
import {getRepoFx} from "../api/getRepo.ts"

export const $repository = createStore<unknown>([])
export const $isFetching = createStore(true)

export const removeRepo = createEvent()

$repository.on(getRepoFx.doneData, (_, value) => value)
$repository.on(removeRepo, () => null)
$isFetching.on(getRepoFx.doneData, () => false)

sample({
  clock: getRepoFx,
  source: $repository,
  target: $repository
})
