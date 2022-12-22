import { BrottsplatsDataDTO } from '../../api/brottsplatskartan/types.js'

interface Props {
  data: BrottsplatsDataDTO
}

// props below cannot infer types?
function Entry(props: Props) {
  const { id, title, description } = props.data

  return (
    <div key={id}>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  )
}

export default Entry