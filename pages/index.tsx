import { DummyEvent, getFeaturedEvents } from "../data/DUMMY_DATA";
import Event from "../components/Event";
import Link from "next/link";
const Home: React.FC = (): JSX.Element => {
  const data: DummyEvent[] = getFeaturedEvents();
  const showData = data.map((event, index) => (
    <Event chosenEvent={event} key={index} />
  ));
  return (
    <main>
      <Link href="/events">Events</Link>
      {showData}
    </main>
  );
};

export default Home;
