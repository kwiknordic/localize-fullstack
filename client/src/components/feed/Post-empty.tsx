import style from "./feed.module.scss"

function EmptyPost() {

  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>No posts to show</h3>
      <p>Please try reloading this feed.</p>
    </article>
  )
}

export default EmptyPost