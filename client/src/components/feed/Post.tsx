import { ResponseDTO } from '@backend/services/responseDTO.js';
import { AiTwotoneEnvironment, AiTwotoneCalendar } from "react-icons/ai";
import style from "./feed.module.scss"

function Post({article}: {article: ResponseDTO}) {
  const { title, description, locations, date } = article

  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={style.details}>
        {locations ? 
        <div>
          <AiTwotoneEnvironment />
          <span>{locations}</span>
        </div>
        : null}
        <div>
          <AiTwotoneCalendar />
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}

export default Post