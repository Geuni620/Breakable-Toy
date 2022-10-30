import React, {useState, useCallback, useEffect} from "react";

export function ReactCallback1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const sumFunction = useCallback(() => {
    console.log(`number ${number}`);
    return;
  }, [number]);

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

export function ReactCallback2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createStyleBox = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div className="App" style={{background: isDark ? "black" : "white"}}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark((prev) => !prev)}>change theme</button>
      <Box createStyleBox={createStyleBox} />
    </div>
  );
}

function Box({createStyleBox}) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("box 키우기");
    setStyle(createStyleBox());
  }, [createStyleBox]);

  return <div style={style}></div>;
}
