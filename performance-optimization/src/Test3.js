import React, {useState, memo, useMemo} from "react";

const App = () => {
  const [parentAge, setParentAge] = useState(0);
  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링 되었습니다.");

  return (
    <div style={{border: "2px solid navy", padding: "10px"}}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>

      <Child name={name} />
    </div>
  );
};

export default App;

const Child = memo(({name}) => {
  console.log("자녀도 렌더링 되었어요.");
  return (
    <div>
      <div style={{border: "2px solid powderblue", padding: "10px"}}></div>
      <h3>자녀</h3>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
    </div>
  );
});
