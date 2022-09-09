import React, {useState, useCallback, useEffect} from "react";

function Test1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const sumFunction = useCallback(() => {
    console.log(`number ${number}`);
    return;
  }, [number]);

  // const sumFunction = () => {
  //   console.log(`number ${number}`);
  //   return;
  // };

  useEffect(() => {
    console.log("sumFunction 변경되었습니다.");
  }, [sumFunction]);

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle.toString()}
      </button>
      <button onClick={sumFunction}>Call</button>
    </div>
  );
}

export default Test1;
