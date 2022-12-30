import { ResponseDTO } from '@backend/services/responseDTO.js';
import { AiTwotoneAlert } from "react-icons/ai";
import { FetchState } from 'src/hooks/useFetch.js';
import { cls } from "../../../../utils/classNames.js";
import Heading from './Heading.js';
import Post from './Post.js';
import style from "../localnews.module.scss";

interface Props { 
  title: string
  data: FetchState<ResponseDTO[]>
}

function Posts({title, data}: Props) {
  const { data: posts, loading, error } = data

  if (loading) return <span>Loading...</span>
  if (error) return <span>{error.name}: {error.message}</span>

  return (
    <div className={cls(style.container)}> {/* here was full-width */}
      <Heading title={title} icon={<AiTwotoneAlert className="text-2xl"/>} />
      {posts ?
        posts.map(article => <Post article={article}/>)
      : <span>Data could not be fetched.</span>
      }
    </div>
  )
}

export default Posts