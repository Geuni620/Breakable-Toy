import React, {useState, useCallback, useEffect} from "react";

function Test2() {
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

export default Test2;

function Box({createStyleBox}) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("box 키우기");
    setStyle(createStyleBox());
  }, [createStyleBox]);

  return <div style={style}></div>;
}
