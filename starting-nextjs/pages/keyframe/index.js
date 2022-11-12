import {useState} from "react";

const index = () => {
  const [boxVisibility, setBoxVisibility] = useState(false);

  const showNewBox = () => {
    setBoxVisibility(!boxVisibility);
  };
  return (
    <div>
      <button type="button" onClick={() => showNewBox()}>
        Edit
      </button>
      {boxVisibility && (
        <div className="show-box">
          <q>I am the new guy</q>
        </div>
      )}
    </div>
  );
};

export default index;
