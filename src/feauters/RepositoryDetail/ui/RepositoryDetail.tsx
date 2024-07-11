import s from "./RepositoryDetails.module.scss"

const getColorPercent = (allWeight: number, weight: number) => {
  return (weight / allWeight) * 100
}
export const RepositoryDetails = ({repository}) => {
  const totalSize = repository.languages.totalSize
  const colors = repository.languages.edges

  return (
    <div className={s.repositoryDetails}>
      <div>
        <h3>Описание:</h3>
        {repository.description ? <p>{repository.description}</p> : <p>Описание отсутствует</p>}
      </div>
      <div className={s.langs}>
        <h3>Языки:</h3>
        <div className={s.row}>
          {colors.map((el) => (
            <div key={el.node.name}>
              <span className={s.langColorsCircle} style={{backgroundColor: el.node.color}}/>
              {el.node.name}
            </div>
          ))}
        </div>
        <div className={s.langColors}>
          {colors.map((el) => (
            <span key={el.node.id} style={{
              backgroundColor: el.node.color,
              width: `${getColorPercent(totalSize, el.size)}%`
            }}/>
          ))}
        </div>
      </div>
    </div>
  )
}
