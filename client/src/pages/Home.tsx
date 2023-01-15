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
  const mitti = useMitti()
  const ticketMaster = useTicketmaster()

  return (
    <div className={style.container}>
      <Feed title="Artiklar" id="articleFeed" data={mitti} icon={<IoNewspaper />} />
      <Feed title="Händelser" id="alertFeed" data={brottsplatskartan} icon={<AiTwotoneAlert />} />
      <Feed title="Event" id="eventFeed" data={ticketMaster} icon={<FaTheaterMasks />} />
    </div>
  )
}

export default Home