import {useState, useReducer} from "react";

/*
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일함", state, action);
  //...
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

// reducer - state를 업데이트 하는 역할(은행)
// dispatch - state 업데이트를 위한 요구)
// action - 요구의 내용
export const ReactReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); // 두 가지 인자를 받음 reducer, momeyState에 들어갈 초기값

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        step="1000"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch({type: "deposit", payload: number})}>
        예금
      </button>
      <button onClick={() => dispatch({type: "withdraw", payload: number})}>
        출금
      </button>
    </div>
  );
};
*/

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return {...student, isHere: !student.isHere};
          }
          return student;
        }),
      };

    default:
      return state;
  }
};

export const ReactReducer = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해 주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({type: "add-student", payload: {name}});
        }}
      >
        추가
      </button>

      {studentsInfo.students.map(({id, name, isHere}) => (
        <Students
          key={id}
          id={id}
          dispatch={dispatch}
          name={name}
          isHere={isHere}
        />
      ))}
    </div>
  );
};

const Students = ({name, dispatch, id, isHere}) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({type: "mark-student", payload: {id}});
        }}
      >
        {name}
      </span>
      <button onClick={() => dispatch({type: "delete-student", payload: {id}})}>
        삭제
      </button>
    </div>
  );
};
