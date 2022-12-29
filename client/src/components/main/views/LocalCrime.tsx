import Heading from './components/Heading.jsx';
import { useBrottsplatskartan } from '../../../api/useBrottsplatskartan.js';

//Icons
import { AiTwotoneEnvironment, AiTwotoneCalendar, AiTwotoneAlert } from "react-icons/ai";

// Styling
import style from "./localnews.module.scss"
import { cls } from "../../../utils/classNames.js";


function LocalCrime({title}) {
  const { data, loading, error } = useBrottsplatskartan()

  if (loading) return <span>Loading...</span>
  if (error) return <span>{error.name}: {error.message}</span>
  if (!data) return <span>No data</span>

  return (
    <div className={cls(style.container)}> {/* here was full-width */}
      <Heading title={title} icon={<AiTwotoneAlert className="text-2xl"/>} />
      {data.map(article => (
        <article className={style.article}>
          <h3>{article.summary}</h3>
          <img src={article["media:content"]} alt={article.title} />
          <div dangerouslySetInnerHTML={{__html: article.description}}></div>
          <div className={style.details}>
            <div className={style.location}>
              <AiTwotoneEnvironment />
              <span>{article.location}</span>
            </div>
            <div className={style.date}>
              <AiTwotoneCalendar />
              <span>{article.date}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default LocalCrime