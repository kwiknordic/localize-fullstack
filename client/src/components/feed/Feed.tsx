import { ResponseDTO } from '@backend/services/responseDTO.js';
import { useEffect, useRef, useState } from 'react';
import { FetchState } from 'src/hooks/useFetch.js';
import { getWidth } from '../../utils/screenSize.js';
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

function Feed({title, id, icon, data}: Props) {
  const { data: posts, loading, error } = data
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    // write logic that disregards changes smaller than 20px
    window.addEventListener("resize", () => setWidth(getWidth()))
    // no clean-up is written, needs to listen for entire lifecycle
  }, [])

  if (loading) return <span>Loading...</span>
  if (error) return <span>{error.name}: {error.message}</span>

  return (
    <div id={id} className={style.feed}>
      <SubHeader title={title} icon={icon} />
      <div className={style.scrollContainer} style={{width: width}}>
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