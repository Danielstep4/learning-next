import { useRouter } from "next/router";
import Event from "../../components/Event";
import { getEventById } from "../../DATA/DUMMY_DATA";
const SingleEvent: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { eventid } = router.query;
  return (
    <>
      <h1>Single Event Without Query</h1>
      <span>{eventid}</span>
      {/* <Event chosenEvent={getEventById(eventid)} />; */}
    </>
  );
};

export default SingleEvent;
