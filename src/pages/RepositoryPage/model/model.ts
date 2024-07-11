import {createEvent, createStore, sample} from "effector"
import {getRepoFx} from "../api/getRepo.ts"

export const $repository = createStore(null)
export const $isFetching = createStore(true)

export const removeRepo = createEvent<never>()

$repository.on(getRepoFx.doneData, (_, value: never) => value)
$repository.on(removeRepo, () => null)
$isFetching.on(getRepoFx.doneData, () => false)

sample({
  clock: getRepoFx,
  source: $repository,
  target: $repository
})
