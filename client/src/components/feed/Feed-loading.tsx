import style from "./feed.module.scss"

function LoadingFeed() {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Posts are loading</h3>
      <p>Please stand by, The server just woke up..</p>
    </article>
  )
}

export default LoadingFeed