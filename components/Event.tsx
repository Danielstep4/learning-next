import { DummyEvent } from "../data/DUMMY_DATA";
import Link from "next/link";
import classes from "../styles/event-item.module.scss";

const Event: React.FC<{ chosenEvent: DummyEvent; showLink?: boolean }> = ({
  chosenEvent,
  showLink = true,
}) => {
  return (
    <article className={classes.item}>
      <div>
        <h1>{chosenEvent.title}</h1>
        <img src={"/" + chosenEvent.image} alt={chosenEvent.title} />
      </div>
      <p>{chosenEvent.description}</p>
      <span>{chosenEvent.date}</span>
      <span>{chosenEvent.location}</span>
      {showLink && (
        <Link href={"/events/" + chosenEvent.id}>Explore Event</Link>
      )}
    </article>
  );
};

export default Event;
