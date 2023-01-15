import style from "./feed.module.scss"

function ErrorFeed({ name, message }: { name: string, message: string }) {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Det finns ett fel.</h3>
      <p>Det är ett, så kallat, "{name}" i detta flöde.</p>
      <p>{message}</p>
    </article>
  )
}

export default ErrorFeed