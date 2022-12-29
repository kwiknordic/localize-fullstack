import { useMitti } from "../../../api/useMitti.js"

// Icons
import { AiTwotoneEnvironment, AiTwotoneCalendar } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";

// Styling
import style from "./localnews.module.scss"
import { cls } from "../../../utils/classNames";
import Heading from './components/Heading';

function LocalNews({title}) {
  const { data, loading, error } = useMitti()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Is error...</span>
  if (!data) return <span>No data</span>

  return (
    <div className={cls(style.container)}> {/* here was full-width */}
      <Heading title={title} icon={<IoNewspaper className={style.icon}/>} />
      {data.map(article => (
        <article className={style.article}>
          <h3>{article.title}</h3>
{/*           <img src={article["media:content"]} alt={article.title} /> */}
          <p>{article.description}</p>
          <div className={style.details}>
            <div className={style.date}>
              <AiTwotoneCalendar />
              <span>{article.pubDate}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default LocalNews