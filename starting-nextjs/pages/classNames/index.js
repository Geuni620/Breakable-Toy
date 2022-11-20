import React from "react";
import classnames from "classnames";

const TestComponent = () => {
  const data = ["abc"];

  const valid = data.find((item) => item === "abc");

  return (
    <div className={classnames("box-info", {"mg-10": valid})}>Test commit</div>
  );
};
export default TestComponent;
