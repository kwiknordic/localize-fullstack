import { ResponseDTO } from '@backend/services/responseDTO.js';
import { AiTwotoneEnvironment, AiTwotoneCalendar } from "react-icons/ai";

function Post({article}: { article: ResponseDTO}) {
  const { title, description, locations, date } = article

  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <div>
          <AiTwotoneEnvironment />
          <span>{locations}</span>
        </div>
        <div>
          <AiTwotoneCalendar />
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}

export default Post