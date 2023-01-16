import { AiTwotoneAlert } from "react-icons/ai";
import { FaTheaterMasks } from 'react-icons/fa';
import { IoNewspaper } from "react-icons/io5";
import { useBrottsplatskartan } from '../api/useBrottsplatskartan.js';
import { useMitti } from '../api/useMitti.js';
import { useTicketmaster } from '../api/useTicketmaster.js';
import { Feed, FeedContainer } from '../components/feed/Feed.js';
import style from "./home.module.scss";

function Home() {
  const brottsplatskartan = useBrottsplatskartan()
  const mitti = useMitti()
  const ticketMaster = useTicketmaster()

  return (
    <div className={style.container}>
      <FeedContainer title="Artiklar" id="articleFeed" icon={<IoNewspaper />}>
        <Feed data={mitti} />
      </FeedContainer>
      <FeedContainer title="Händelser" id="alertFeed" icon={<AiTwotoneAlert />}>
        <Feed data={brottsplatskartan} />
      </FeedContainer>
      <FeedContainer title="Event" id="eventFeed" icon={<FaTheaterMasks />}>
        <Feed data={ticketMaster} />
      </FeedContainer>
    </div>
  )
}

export default Home