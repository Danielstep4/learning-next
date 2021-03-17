import Event from "../../components/Event";
import Link from "next/link";
import { useRouter } from "next/router";
import { DummyEvent, getEventById } from "../../data/DUMMY_DATA";
const SingleEvent: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { eventId } = router.query;
  const chosenEvent: DummyEvent = getEventById(eventId);
  if (!eventId || !chosenEvent) return <h1>Not Found</h1>;
  else
    return (
      <>
        <Link href="/">Home</Link>
        <h1>Single Event Without Query</h1>
        <Event chosenEvent={chosenEvent} showLink={false} />
      </>
    );
};

export default SingleEvent;
