import {createStore, sample} from "effector"
import {getRepoFx} from "../api/getRepo.ts"

export const $repository = createStore(null)
export const $isFetching = createStore(true)

$repository.on(getRepoFx.doneData, (_, value: never) => value)
$isFetching.on(getRepoFx.doneData, () => false)

sample({
  clock: getRepoFx,
  source: $repository,
  target: $repository
})
