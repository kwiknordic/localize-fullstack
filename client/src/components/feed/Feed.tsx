import { ResponseDTO } from '@backend/services/responseDTO.js';
import { FetchState } from 'src/hooks/useFetch.js';
import { useResizeListener } from "../../hooks/useResizeListener.js"
import EndOfFeed from './Feed-end.js';
import SubHeader from './Feed-Subheader.js';
import style from "./feed.module.scss";
import EmptyPost from './Post-empty.js';
import Post from './Post.js';

interface Props {
  id: string,
  title: string
  data: FetchState<ResponseDTO[]>
  icon: JSX.Element
}

function Feed({ title, id, icon, data }: Props) {
  const { data: posts, loading, error } = data
  const width = useResizeListener()
  const setWidth = width < 450 ? (width * 0.88) : 450

  if (loading) return <span>Loading...</span>
  if (error instanceof Error) return <span>{error.name}: {error.message}</span>

  return (
    <div id={id} className={style.feed}>
      <SubHeader title={title} icon={icon} />
      <div className={style.scrollContainer} style={{ width: setWidth }}>
        {posts ?
          posts.map(article => <Post article={article} key={`${article.title}-${article.date}`} />)
          : <EmptyPost />
        }
        <EndOfFeed />
      </div>
    </div>
  )
}

export default Feed