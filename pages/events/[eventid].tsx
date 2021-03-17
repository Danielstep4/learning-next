import Event from "../../components/Event";
import { useRouter } from "next/router";
import { DummyEvent, getEventById } from "../../data/DUMMY_DATA";
const SingleEvent: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <>
      <h1>Single Event Without Query</h1>
      <span>{eventId}</span>
      {/* <Event chosenEvent={chosenEvent} />; */}
    </>
  );
};

export default SingleEvent;
