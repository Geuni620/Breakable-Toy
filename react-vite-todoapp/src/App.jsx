import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,
  VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: VITE_FIREBASE_AUTHDOMAIN,
  projectId: VITE_FIREBASE_PROJECTID,
  storageBucket: VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
  appId: VITE_FIREBASE_APPID,
  measurementId: VITE_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    props.onSubmit(input);
    setInput("");
  };

  return (
    <Box sx={{margin: "auto"}}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          id="todo-item-input"
          label="Todo Item"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

const TodoItem = ({todoItem, onTodoItemClick, onRemoveClick}) => {
  const style = todoItem.isFinished ? {textDecoration: "line-through"} : {};

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => onRemoveClick(todoItem)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton
        role={undefined}
        onClick={() => onTodoItemClick(todoItem)}
        dense
      >
        <ListItemIcon>
          <Checkbox edge="start" checked={todoItem.isFinished} disableRipple />
        </ListItemIcon>
        <ListItemText style={style} primary={todoItem.todoItemContent} />
      </ListItemButton>
    </ListItem>
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
    <Box>
      <List sx={{margin: "auto", maxWidth: 720}}>{todoList}</List>
    </Box>
  );
};

const TodoListAppBar = ({currentUser}) => {
  const loginWithGoogleButton = (
    <Button
      color="inherit"
      onClick={() => {
        signInWithRedirect(auth, provider);
      }}
    >
      Login with Google
    </Button>
  );
  const logoutButton = (
    <Button
      color="inherit"
      onClick={() => {
        signOut(auth);
      }}
    >
      Log out
    </Button>
  );
  const button = currentUser === null ? loginWithGoogleButton : logoutButton;

  return (
    <AppBar position="static">
      <Toolbar sx={{width: "100%", maxWidth: 720, margin: "auto"}}>
        <Typography variant="h6" component="div">
          Todo List App
        </Typography>
        <Box sx={{flexGrow: 1}} />
        {button}
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [todoItemList, setTodoItemList] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user.uid);
    } else {
      setCurrentUser(null);
    }
  });

  const syncTodoItemListStateWithFirestore = () => {
    const q = query(
      collection(db, "todoItem"),
      where("userId", "==", currentUser),
      orderBy("createdTime", "desc")
    );

    getDocs(q).then((querySnapshot) => {
      const firestoreTodoItemList = [];
      querySnapshot.forEach((doc) => {
        firestoreTodoItemList.push({
          id: doc.id,
          todoItemContent: doc.data().todoItemContent,
          isFinished: doc.data().isFinished,
          createdTime: doc.data().createdTime ?? 0,
          userId: doc.data().userId,
        });
      });
      setTodoItemList(firestoreTodoItemList);
    });
  };

  useEffect(() => {
    syncTodoItemListStateWithFirestore();
  }, [currentUser]);

  const onSubmit = async (newTodoItem) => {
    await addDoc(collection(db, "todoItem"), {
      todoItemContent: newTodoItem,
      isFinished: false,
      createdTime: Math.floor(Date.now() / 1000),
      userId: currentUser,
    });
    syncTodoItemListStateWithFirestore();
  };

  const onTodoItemClick = async (clickedTodoItem) => {
    const todoItemRef = doc(db, "todoItem", clickedTodoItem.id);
    await setDoc(
      todoItemRef,
      {isFinished: !clickedTodoItem.isFinished},
      {merge: true}
    );
    syncTodoItemListStateWithFirestore();
  };

  const onRemoveClick = async (removedTodoItem) => {
    const todoItemRef = doc(db, "todoItem", removedTodoItem.id);
    await deleteDoc(todoItemRef);
    syncTodoItemListStateWithFirestore();
  };

  return (
    <div className="App">
      <TodoListAppBar currentUser={currentUser} />
      <Container sx={{paddingTop: 3}}>
        <TodoItemInputField onSubmit={onSubmit} />
        <TodoItemList
          todoItemList={todoItemList}
          onTodoItemClick={onTodoItemClick}
          onRemoveClick={onRemoveClick}
        />
      </Container>
    </div>
  );
};

export default App;
