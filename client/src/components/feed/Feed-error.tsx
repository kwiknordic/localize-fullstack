import style from "./feed.module.scss"

function ErrorFeed({ name, message }: { name: string, message: string }) {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>There is an error.</h3>
      <p>There is a {name} with this feed.</p>
      <p>{message}</p>
    </article>
  )
}

export default ErrorFeed