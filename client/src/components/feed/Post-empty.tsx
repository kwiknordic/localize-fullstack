import style from "./feed.module.scss"

function EmptyPost() {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Det finns inga artiklar att visa</h3>
      <p>Vänligen vänta, servern kan precis ha vaknat upp..</p>
    </article>
  )
}

export default EmptyPost