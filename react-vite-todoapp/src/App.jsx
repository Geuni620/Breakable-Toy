import {useState} from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

let todoItemId = 0;
const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    props.onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <TextField
        id="todo-item-input"
        label="할일 목록"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button variant="outlined" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

const TodoItem = ({todoItem, onTodoItemClick, onRemoveClick}) => {
  const style = todoItem.isFinished ? {textDecoration: "line-through"} : {};

  return (
    <li>
      <span style={style} onClick={() => onTodoItemClick(todoItem)}>
        {todoItem.todoItemContent}
      </span>
      <Button variant="outlined" onClick={() => onRemoveClick(todoItem)}>
        Remove
      </Button>
    </li>
  );
};

const TodoItemList = ({todoItemList, onTodoItemClick, onRemoveClick}) => {
  const todoList = todoItemList.map((todoItem, idx) => {
    return (
      <TodoItem
        key={idx}
        todoItem={todoItem}
        onTodoItemClick={onTodoItemClick}
        onRemoveClick={onRemoveClick}
      />
    );
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

const App = () => {
  const [todoItemList, setTodoItemList] = useState([]);

  const onSubmit = (newTodoItem) => {
    setTodoItemList([
      ...todoItemList,
      {
        id: todoItemId++,
        todoItemContent: newTodoItem,
        isFinished: false,
      },
    ]);
  };

  const onTodoItemClick = (clickedTodoItem) => {
    setTodoItemList(
      todoItemList.map((todoItem) => {
        if (clickedTodoItem.id === todoItem.id) {
          return {
            id: clickedTodoItem.id,
            todoItemContent: clickedTodoItem.todoItemContent,
            isFinished: !clickedTodoItem.isFinished,
          };
        } else {
          return todoItem;
        }
      })
    );
  };

  const onRemoveClick = (removedTodoItem) => {
    setTodoItemList(
      todoItemList.filter((todoItem) => {
        return todoItem.id !== removedTodoItem.id;
      })
    );
  };

  return (
    <div className="App">
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList
        todoItemList={todoItemList}
        onTodoItemClick={onTodoItemClick}
        onRemoveClick={onRemoveClick}
      />
    </div>
  );
};

export default App;
