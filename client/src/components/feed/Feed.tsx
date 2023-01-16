import { ResponseDTO } from '@backend/services/responseDTO.js';
import { ReactNode } from 'react';
import { FetchState } from 'src/hooks/useFetch.js';
import { useResizeListener } from "../../hooks/useResizeListener.js"
import FeedHeading from './FeedHeading.js';
import style from "./feed.module.scss";
import { Post, EmptyPost, LoadingPost, ErrorPost, EndOfPosts } from './Post.js';

type FeedContainerProps = {
  id: string,
  title: string
  icon: JSX.Element
  children?: ReactNode
}

export function FeedContainer({ id, title, icon, children }: FeedContainerProps) {
  const width = useResizeListener()
  const setWidth = width < 450 ? (width * 0.88) : 450

  return (
    <div id={id} className={style.feed}>
      <FeedHeading title={title} icon={icon} />
      <div className={style.scrollContainer} style={{ width: setWidth }}>
        {children}
      </div>
    </div>
  )
}

export function Feed({ data }: { data: FetchState<ResponseDTO[]> }) {
  const { data: posts, loading, error } = data

  if (loading) return <LoadingPost />
  if (error instanceof Error) return <ErrorPost name={error.name} message={error.message} />

  return (
    <>
      {posts ? posts.map(article => <Post article={article} key={`${article.title}-${article.date}`} />)
        : <EmptyPost />}
      {posts && <EndOfPosts />}
    </>
  )
}