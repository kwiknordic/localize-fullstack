import { ResponseDTO } from '@backend/services/responseDTO.js';
import { FetchState } from 'src/hooks/useFetch.js';
import Header from './Feed-heading.js';
import Post from './Post.js';
import EmptyPost from './Post-empty.js';
import style from "./feed.module.scss";
import LastPost from './Post-last.js';

interface Props { 
  title: string
  data: FetchState<ResponseDTO[]>
  icon: JSX.Element
}

function Feed({title, icon, data}: Props) {
  const { data: posts, loading, error } = data

  if (loading) return <span>Loading...</span>
  if (error) return <span>{error.name}: {error.message}</span>

  return (
    <div className={style.feed}>
      <Header title={title} icon={icon} />
      {posts ?
        posts.map(article => <Post article={article}/>)
      : <EmptyPost />
      }
      <LastPost />
    </div>
  )
}

export default Feed