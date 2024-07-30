import {createEffect} from "effector"

const TOKEN = ''

// тут смотреть не на что

const url = 'https://api.github.com/graphql';
const headers = {
  'Authorization': `token ${TOKEN}`,
  'Content-Type': 'application/json',
}

async function fetchRepository(params: unknown) {
  console.log(params)

  const query = `
    query Repository($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
          allowUpdateBranch
        archivedAt
        autoMergeAllowed
        createdAt
        databaseId
        deleteBranchOnMerge
        description
        homepageUrl
        name
        nameWithOwner
        openGraphImageUrl
        pushedAt
        stargazerCount
        updatedAt
        url
        usesCustomOpenGraphImage
        owner {
            avatarUrl
            login
        }
        languages(first: 10) {
            edges {
                node {
                    color
                    id
                    name
                }
                size
            }
            totalSize
        }
      }
  }
  `

  const body = JSON.stringify({ query, variables: params })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    })

    const json = await response.json()

    if (response.ok) {
      return json.data.repository
    } else {
      console.error('Error:', json.errors)
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

export const getRepoFx = createEffect()
getRepoFx.use(fetchRepository)
