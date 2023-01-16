import { ResponseDTO } from '@backend/services/responseDTO.js';
import { AiTwotoneEnvironment, AiTwotoneCalendar } from "react-icons/ai";
import style from "./feed.module.scss"

export function Post({ article }: { article: ResponseDTO }) {
  const { title, description, locations, date } = article

  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={style.details}>
        {locations ?
          <div>
            <AiTwotoneEnvironment />
            <span>{locations}</span>
          </div>
          : null}
        <div>
          <AiTwotoneCalendar />
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}

export function EmptyPost() {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Det finns inga artiklar att visa</h3>
      <p>Vänligen vänta, servern kan precis ha vaknat upp..</p>
    </article>
  )
}

export function LoadingPost() {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Artiklar laddas in</h3>
      <p>Vänligen vänta, servern har precis vaknat..</p>
    </article>
  )
}

export function ErrorPost({ name, message }: { name: string, message: string }) {
  return (
    <article className={`${style.article} rounded-corners`}>
      <h3>Fel i flödet</h3>
      <p>Det är ett {name}-fel med detta flöde.</p>
      <p>{message}</p>
    </article>
  )
}

export function EndOfPosts() {

  return (
    <article className={`${style.article} ${style.empty} rounded-corners`}>
      <h3>Du har kommit till slutet.</h3>
      <p>Det finns inga fler artiklar att visa.</p>
    </article>
  )
}