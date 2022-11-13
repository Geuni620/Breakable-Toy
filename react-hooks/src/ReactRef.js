import {useState, useRef, useEffect} from "react";

export const ReactRef1 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref : ${countRef.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var : ${countVar}`);
  };

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const printResult = () => {
    console.log(`ref : ${countRef.current} , var : ${countVar}`);
  };

  return (
    <div>
      <p> Ref : {countRef.current}</p>
      <p> 변수 : {countVar}</p>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>변수 올려</button>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={printResult}>ref / var 값 출력</button>
    </div>
  );
};

export const ReactRef2 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    console.log(`랜더링 수: ${renderCount.current}`);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        올려
      </button>
    </div>
  );
};

export const ReactRef3 = () => {
  const inputRef = useRef();

  // console.log(document.querySelector("./inputRef"));

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      {/* <input className="inputRef" type="text" placeholder="username" /> */}
      <button onClick={login}>로그인</button>
    </div>
  );
};
