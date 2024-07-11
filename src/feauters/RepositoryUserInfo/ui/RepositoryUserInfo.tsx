import s from "./RepositoryUserInfo.module.scss"

export const RepositoryUserInfo = ({repository}) => {

  return (
    <div className={s.ownerInfo}>
      <div className={s.ownerAvatar}>
        <img src={repository.owner.avatarUrl} alt=""/>
      </div>
      <h3>{repository.owner.login}</h3>
    </div>
  )
}
