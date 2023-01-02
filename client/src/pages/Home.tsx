import { useBrottsplatskartan } from '../api/useBrottsplatskartan.js';
import { useMitti } from '../api/useMitti.js';
import { AiTwotoneAlert } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5"
import Feed from '../components/feed/Feed.js';
import style from "./home.module.scss";

function Home() {
  const brottsplatskartan = useBrottsplatskartan()
  const mitti = useMitti({from: 3})

  return (
    <div className={style.container}>
      <Feed title="Articles" data={mitti} icon={<IoNewspaper/>} />
      <Feed title="Alerts" data={brottsplatskartan} icon={<AiTwotoneAlert/>} />
    </div>
  )
}

export default Home