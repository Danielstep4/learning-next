import { DummyEvent } from "../data/DUMMY_DATA";
import classes from "../styles/event-item.module.scss";

const Event: React.FC<{ chosenEvent: DummyEvent }> = ({ chosenEvent }) => {
  return (
    <article className={classes.item}>
      <div>
        <h1>{chosenEvent.title}</h1>
        <img src={chosenEvent.image} alt={chosenEvent.title} />
      </div>
      <p>{chosenEvent.description}</p>
      <span>{chosenEvent.date}</span>
      <span>{chosenEvent.location}</span>
    </article>
  );
};

export default Event;
