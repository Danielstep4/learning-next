import { useState } from "react";
import Event from "../../components/Event";
import { getAllEvents, DummyEvent } from "../../DATA/DUMMY_DATA";
const Events: React.FC = (): JSX.Element => {
  const [data, setData] = useState(getAllEvents());
  const showData = data.map((event: DummyEvent) => {
    return <Event chosenEvent={event} />;
  });
  return <main id="events">{showData}</main>;
};

export default Events;
