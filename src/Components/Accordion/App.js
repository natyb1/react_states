import React from "react";
import { Accoordion } from "./Accoordion";

const books = [
  {
    title: "To Kill a Mockingbird",
    text: "You never really understand a person until you consider things from his point of view. Mockingbirds don't do one thing but make music for us to enjoy.",
  },
  {
    title: "1984",
    text: "Big Brother is Watching You. War is peace. Freedom is slavery.",
  },
  {
    title: "The Great Gatsby",
    text: "So we beat on, boats against the current, borne back ceaselessly into the past. I hope she'll be a fool — that's the best thing a girl can be.",
  },
];

const App = () => {
  return (
    <div>
      <Accoordion books={books} />
    </div>
  );
};

export default App;
