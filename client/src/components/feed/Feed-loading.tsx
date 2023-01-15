import style from "./feed.module.scss"

function LoadingFeed() {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Artiklar laddas in</h3>
      <p>Vänligen vänta, servern har precis vaknat..</p>
    </article>
  )
}

export default LoadingFeed