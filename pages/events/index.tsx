import Event from "../../components/Event";
import Link from "next/link";
import { getAllEvents, DummyEvent } from "../../data/DUMMY_DATA";
const Events: React.FC = (): JSX.Element => {
  const data: DummyEvent[] = getAllEvents();
  const showData = data.map((event, index) => {
    return <Event chosenEvent={event} key={index} />;
  });
  return (
    <main id="events">
      <Link href="/">Home</Link>
      {showData}
    </main>
  );
};

export default Events;
