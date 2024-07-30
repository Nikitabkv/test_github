import s from "./RepositoryUserInfo.module.scss"
import {FC} from "react";

type RepositoryUserInfoProps = {
  repository: {
    owner: {
      login: string
      avatarUrl: string
    }
  }
}

export const RepositoryUserInfo:FC<RepositoryUserInfoProps> = ({repository}) => {

  return (
    <div className={s.ownerInfo}>
      <div className={s.ownerAvatar}>
        <img src={repository.owner.avatarUrl} alt=""/>
      </div>
      <h3>{repository.owner.login}</h3>
    </div>
  )
}
