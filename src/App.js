import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why Use React",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "Ypu use React by creating component",
  }
];

export default () => {
    return (
        <div>
            <br />
            <Accordion items={items} />
        </div>
  );
};
