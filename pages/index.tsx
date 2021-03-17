import { useState } from "react";
import { getFeaturedEvents } from "../data/DUMMY_DATA";
import Event from "../components/Event";
const Home: React.FC = (): JSX.Element => {
  const [data, setData] = useState(getFeaturedEvents());
  const showData = data.map((event, index) => (
    <Event chosenEvent={event} key={index} />
  ));
  return (
    <>
      <main>{showData}</main>
    </>
  );
};

export default Home;
