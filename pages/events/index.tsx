import { useState } from "react";
import Event from "../../components/Event";
import { getAllEvents, DummyEvent } from "../../data/DUMMY_DATA";
const Events: React.FC = (): JSX.Element => {
  const [data, setData] = useState(getAllEvents());
  const showData = data.map((event: DummyEvent, index) => {
    return <Event chosenEvent={event} key={index} />;
  });
  return <main id="events">{showData}</main>;
};

export default Events;
