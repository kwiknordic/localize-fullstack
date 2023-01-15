import style from "./feed.module.scss"

function EndOfFeed() {

  return (
    <article className={`${style.article} ${style.empty} rounded-corners`}>
      <h3>Du har kommit till slutet.</h3>
      <p>Det finns inga fler artiklar att visa.</p>
    </article>
  )
}

export default EndOfFeed