import React from "react";
import { AccordionItem } from "./AccordionItem";

export function Accoordion({ books }) {
  return (
    <>
      {books.map((bk, i) => (
        <AccordionItem title={bk.title} text={bk.text} num={i} key={i} />
      ))}
    </>
  );
}
