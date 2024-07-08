import {useEffect, useState} from "react"

async function fetchRepositories() {
  const url = 'https://api.github.com/graphql';
  const headers = {
    'Authorization': `сюда гитхаб токен свой`,
    'Content-Type': 'application/json',
  };

  const query = `
    query {
      viewer {
        repositories(first: 100) {
          nodes {
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

  const body = JSON.stringify({ query });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    const json = await response.json();

    if (response.ok) {
      return json.data.viewer.repositories.nodes;
    } else {
      console.error('Error:', json.errors);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

const MainPage = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchRepositories()
      .then(data => setRepos(data))
    console.log(repos)
  }, []);

  return (
    <div>
      <input type="text" />
      <div>
        <h1>Список репозиториев:</h1>
        <div className={'repoList'}>
          {repos.map((el) => (
            <div className={'repoItem'}>
              <span>
                Название: {el.name}
              </span>
              <span>
                Звезд: {el.stargazerCount}⭐
              </span>
              <span>
                Последний коммит: {el.pushedAt.slice(0, 10)}
              </span>
              <span>
                Ссылка <a href={el.url}>{el.url}</a>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h2>Страницы</h2>
          <div>
            [
            <span>1</span>,
            <span>2</span>,
            <span>3</span>,
            <span>4</span>,
            <span>5</span>,
            <span>6</span>,
            <span>7</span>,
            <span>8</span>,
            <span>9</span>,
            <span>10</span>]
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage
