import { useRouter } from "next/router";
import {
  getFilteredEvents,
  DataFilter,
  DummyEvent,
} from "../../data/DUMMY_DATA";

const SingleEventWithQuery: React.FC = (): JSX.Element => {
  const router = useRouter();
  let filter: DataFilter;
  const { slug } = router.query;
  filter = {
    year: +slug[0],
    month: +slug[1],
  };
  const chosenEvent: DummyEvent[] = getFilteredEvents(filter);
  return <div>Single Event With Query</div>;
};

export default SingleEventWithQuery;
