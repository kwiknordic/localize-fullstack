import { AiTwotoneAlert } from "react-icons/ai";
import { FaTheaterMasks } from 'react-icons/fa';
import { IoNewspaper } from "react-icons/io5";
import { useBrottsplatskartan } from '../api/useBrottsplatskartan.js';
import { useMitti } from '../api/useMitti.js';
import { useTicketmaster } from '../api/useTicketmaster.js';
import Feed from '../components/feed/Feed.js';
import style from "./home.module.scss";

function Home() {
  const brottsplatskartan = useBrottsplatskartan()
  const mitti = useMitti({from: 3})
  const ticketMaster = useTicketmaster()

  return (
    <div className={style.container}>
      <Feed title="Articles" data={mitti} icon={<IoNewspaper/>} />
      <Feed title="Alerts" data={brottsplatskartan} icon={<AiTwotoneAlert/>} />
      <Feed title="Events" data={ticketMaster} icon={<FaTheaterMasks/>} />
    </div>
  )
}

export default Home