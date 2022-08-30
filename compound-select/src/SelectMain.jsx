import React from "react";
import styled from "styled-components";
import {SelectProvider} from "./SelectContext";
import {Select} from "antd";
import {OPTIONS} from "../Option";
import {Label, Option} from "./Components";

export const SelectMain = ({value, children}) => {
  const {STACKS} = OPTIONS;
  const [basicInfo, setBasicInfo] = React.useState({
    stacks: "",
  });

  const handleBasicInfo = (value, name) => {
    setBasicInfo({...basicInfo, [name]: value});
  };

  return (
    <SelectProvider value={{handleBasicInfo, basicInfo, STACKS}}>
      <StyledSelect>{children}</StyledSelect>
    </SelectProvider>
  );
};

const StyledSelect = styled(Select)`
  padding: 10px 10px;
  width: 100%;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
  cursor: pointer;
`;

SelectMain.Label = Label;
SelectMain.Option = Option;
