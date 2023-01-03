import { ResponseDTO } from '@backend/services/responseDTO.js';
import { useEffect, useState } from 'react';
import { FetchState } from 'src/hooks/useFetch.js';
import { getClientHeightNonHeader, getMinWidth } from '../../utils/screenSize.js';
import EndOfFeed from './Feed-end.js';
import Header from './Feed-heading.js';
import style from "./feed.module.scss";
import EmptyPost from './Post-empty.js';
import Post from './Post.js';

interface Props { 
  title: string
  data: FetchState<ResponseDTO[]>
  icon: JSX.Element
}

function Feed({title, icon, data}: Props) {
  const { data: posts, loading, error } = data
  const [minWidth, setMinWidth] = useState(getMinWidth())
  const [height, setHeight] = useState(getClientHeightNonHeader())

  useEffect(() => {
    // write logic that disregards changes smaller than 20px
    window.addEventListener("resize", () => {
      setMinWidth(getMinWidth())
      setHeight(getClientHeightNonHeader())
    })
    // no clean-up is written, needs to listen for entire lifecycle
  }, [])

  if (loading) return <span>Loading...</span>
  if (error) return <span>{error.name}: {error.message}</span>

  return (
    <div className={style.feed}>
      <Header title={title} icon={icon} />
      <div className={style.scrollContainer} style={{minWidth: minWidth, height: height }}>
        {posts ?
          posts.map(article => <Post article={article}/>)
        : <EmptyPost />
        }
        <EndOfFeed />
      </div>
    </div>
  )
}

export default Feed