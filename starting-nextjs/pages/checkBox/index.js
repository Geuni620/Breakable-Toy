import {useState} from "react";
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
  const [checkedState, setCheckedState] = useState(
    new Array(10).fill({
      checked: false,
      backgroundColor: "#ffffff",
    })
  );
  const [selectDeselectAllIsChecked, setSelectDeselectAllIsChecked] =
    useState(false);
  const [numCheckboxesSelected, setNumCheckboxesSelected] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((element, index) => {
      if (position === index) {
        return {
          ...element,
          checked: !element.checked,
          backgroundColor: element.checked ? "#ffffff" : "#eeeeee",
        };
      }
      return element;
    });
    setCheckedState(updatedCheckedState);

    const totalSelected = updatedCheckedState
      .map((element) => element.checked)
      .reduce((sum, currentState, index) => {
        if (currentState) {
          return sum + issues[index].value;
        }
        return sum;
      }, 0);
    setNumCheckboxesSelected(totalSelected);

    handleIndeterminateCheckbox(totalSelected);
  };

  const handleIndeterminateCheckbox = (total) => {
    const indeterminateCheckbox = document.getElementById(
      "custom-checkbox-selectDeselectAll"
    );
    let count = 0;

    issues.forEach((element) => {
      if (element.status === "open") {
        count += 1;
      }
    });

    if (total === 0) {
      indeterminateCheckbox.indeterminate = false;
      setSelectDeselectAllIsChecked(false);
    }
    if (total > 0 && total < count) {
      indeterminateCheckbox.indeterminate = true;
      setSelectDeselectAllIsChecked(false);
    }
    if (total === count) {
      indeterminateCheckbox.indeterminate = false;
      setSelectDeselectAllIsChecked(true);
    }
  };

  const handleSelectDeselectAll = (event) => {
    let {checked} = event.target;

    const allTrueArray = [];
    issues.forEach((element) => {
      if (element.status === "open") {
        allTrueArray.push({checked: true, backgroundColor: "#eeeeee"});
      } else {
        allTrueArray.push({checked: false, backgroundColor: "#ffffff"});
      }
    });

    const allFalseArray = new Array(issues.length).fill({
      checked: false,
      backgroundColor: "#ffffff",
    });
    checked ? setCheckedState(allTrueArray) : setCheckedState(allFalseArray);

    const totalSelected = (checked ? allTrueArray : allFalseArray)
      .map((element) => element.checked)
      .reduce((sum, currentState, index) => {
        if (currentState && issues[index].status === "open") {
          return sum + issues[index].value;
        }
        return sum;
      }, 0);
    setNumCheckboxesSelected(totalSelected);
    setSelectDeselectAllIsChecked((prevState) => !prevState);
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            <input
              className={classes.checkbox}
              type={"checkbox"}
              id={"custom-checkbox-selectDeselectAll"}
              name={"custom-checkbox-selectDeselectAll"}
              value={"custom-checkbox-selectDeselectAll"}
              checked={selectDeselectAllIsChecked}
              onChange={handleSelectDeselectAll}
            />
          </th>
          <th className={classes.numChecked}>
            {numCheckboxesSelected
              ? `Selected ${numCheckboxesSelected}`
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
        {issues.map(({name, message, status}, index) => {
          let issueIsOpen = status === "open";
          let onClick = issueIsOpen ? () => handleOnChange(index) : null;
          let stylesTr = issueIsOpen
            ? classes.openIssue
            : classes.resolvedIssue;

          return (
            <tr
              className={stylesTr}
              style={checkedState[index]}
              key={index}
              onClick={onClick}
            >
              <td>
                {issueIsOpen ? (
                  <input
                    className={classes.checkbox}
                    type={"checkbox"}
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index].checked}
                    onChange={() => handleOnChange(index)}
                  />
                ) : (
                  <input
                    className={classes.checkbox}
                    type={"checkbox"}
                    disabled
                  />
                )}
              </td>
              <td>{name}</td>
              <td>{message}</td>
              <td>
                {issueIsOpen ? (
                  <span className={classes.greenCircle} />
                ) : (
                  <span className={classes.redCircle} />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CheckBoxPractice;
