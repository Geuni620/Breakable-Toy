import React from "react";

interface AddProps {
  x: number;
  y: number;
}

const Add = ({x, y}: AddProps) => {
  return <div>{x + y}</div>;
};

Add.defaultProps = {
  x: 0,
  y: 3,
};

export default Add;
