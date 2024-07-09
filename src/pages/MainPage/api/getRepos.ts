import {createEffect} from "effector";

async function fetchRepositories(text) {
  const url = 'https://api.github.com/graphql';
  const headers = {
    'Authorization': `yourtoken`,
    'Content-Type': 'application/json',
  };

  const query = `
    query Search($text: String!) {
    search(query: $text, type: REPOSITORY, first: 100) {
          nodes {
              ... on Repository {
                 name
                 description
                 url
                 stargazerCount
                 forkCount
                 pushedAt
              }
          }
      }
  }
  `;

  const body = JSON.stringify({ query, variables: { text } });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    const json = await response.json();

    if (response.ok) {
      return json.data.search.nodes;
    } else {
      console.error('Error:', json.errors);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export const getReposFx = createEffect()

getReposFx.use(fetchRepositories)
