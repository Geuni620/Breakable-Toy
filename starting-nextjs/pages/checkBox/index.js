import {useMemo, useState, useRef} from "react";
import classes from "./Table.module.css";

export const issues = [
  {
    id: "c9613c41-32f0-435e-aef2-b17ce758431b",
    name: "TypeError",
    message: "Cannot read properties of undefined (reading 'length')",
    status: "open",
    numEvents: 105,
    numUsers: 56,
    value: 1,
  },
  {
    id: "1f62d084-cc32-4c7b-943d-417c5dac896e",
    name: "TypeError",
    message: "U is not a function",
    status: "resolved",
    numEvents: 45,
    numUsers: 34,
    value: 1,
  },
  {
    id: "d4febf2b-022e-45ff-a70b-cea24234f8b5",
    name: "TypeError",
    message: 'can\'t define property F: "obj" is not extensible',
    status: "open",
    numEvents: 31,
    numUsers: 21,
    value: 1,
  },
  {
    id: "ead13b50-3662-4150-99a3-0b1e4e8e4b5b",
    name: "TypeError",
    message: "setting getter-only property R",
    status: "open",
    numEvents: 26,
    numUsers: 24,
    value: 1,
  },
  {
    id: "a0ffc9a5-7105-4640-92b2-5c360db976bf",
    name: "ReferenceError",
    message: "C is not defined",
    status: "open",
    numEvents: 12,
    numUsers: 11,
    value: 1,
  },
  {
    id: "01f6f953-70ad-46cf-b863-c7bfd95e5626",
    name: "SyntaxError",
    message: "missing name after . operator",
    status: "resolved",
    numEvents: 15,
    numUsers: 13,
    value: 1,
  },
];

function CheckBoxPractice() {
  const topCheckbox = useRef();
  const [checkedById, setCheckedById] = useState(new Set());

  const openIssues = useMemo(
    () => issues.filter(({status}) => status === "open"),
    [issues]
  );
  const numOpenIssues = openIssues.length;
  const numCheckedIssues = checkedById.size;

  const handleOnChange = (id) => {
    const updatedCheckedById = new Set(checkedById);
    if (updatedCheckedById.has(id)) {
      updatedCheckedById.delete(id);
    } else {
      updatedCheckedById.add(id);
    }
    setCheckedById(updatedCheckedById);

    const updatedNumChecked = updatedCheckedById.size;
    topCheckbox.current.indeterminate =
      updatedNumChecked > 0 && updatedNumChecked < numOpenIssues;
  };

  const handleSelectDeselectAll = (event) => {
    if (event.target.checked) {
      const allChecked = new Set(openIssues.map(({id}) => id));
      setCheckedById(allChecked);
    } else {
      setCheckedById(new Set());
    }
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              ref={topCheckbox}
              className={classes.checkbox}
              checked={numOpenIssues === numCheckedIssues}
              onChange={handleSelectDeselectAll}
            />
          </th>
          <th className={classes.numChecked}>
            {numCheckedIssues
              ? `Selected ${numCheckedIssues}`
              : "None selected"}
          </th>
        </tr>
        <tr>
          <th />
          <th>Name</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {issues.map(({id, name, message, status}) => {
          const isIssueOpen = status === "open";
          return (
            <tr
              key={id}
              className={
                isIssueOpen ? classes.openIssue : classes.resolvedIssue
              }
              style={{backgroundColor: checkedById.has(id) ? "#eee" : "#fff"}}
            >
              <td>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  checked={checkedById.has(id)}
                  disabled={!isIssueOpen}
                  onChange={() => handleOnChange(id)}
                />
              </td>
              <td>{name}</td>
              <td>{message}</td>
              <td>
                <span
                  className={
                    isIssueOpen ? classes.greenCircle : classes.redCircle
                  }
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CheckBoxPractice;
