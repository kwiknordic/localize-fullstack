import style from "./feed.module.scss"

function EndOfFeed() {

  return (
    <article className={`${style.article} ${style.empty} rounded-corners`}>
      <h3>You have come to the end.</h3>
      <p>There are no more posts to show.</p>
    </article>
  )
}

export default EndOfFeed