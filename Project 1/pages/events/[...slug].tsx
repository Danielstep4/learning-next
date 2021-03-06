import { useRouter } from "next/router";
import {
  getFilteredEvents,
  DataFilter,
  DummyEvent,
} from "../../data/DUMMY_DATA";
import Event from "../../components/Event";

const SingleEventWithQuery: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug || !slug.length || slug.length > 2) return <h1>404</h1>;
  const filter: DataFilter = {
    year: +slug[0],
    month: +slug[1],
  };
  const chosenEvents: DummyEvent[] = getFilteredEvents(filter);
  if (!chosenEvents.length) return <h1>Not Found</h1>;
  const showData = chosenEvents.map((event, index) => (
    <Event chosenEvent={event} key={index} />
  ));

  return (
    <>
      <div>Single Event With Query</div>
      <div>{showData}</div>
    </>
  );
};

export default SingleEventWithQuery;
