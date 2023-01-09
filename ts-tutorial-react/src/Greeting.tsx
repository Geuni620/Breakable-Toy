import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings = ({name, mark}: GreetingsProps) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;

function Greeting({name}: React.FC<GreetingsProps>) {
  return <h1>Hello</h1>;
}
