import React from "react";
import styled from "styled-components";
import {Select} from "antd";
import {OPTIONS} from "./OptionList";
const {Option} = Select;

const Compound = () => {
  const {STACKS} = OPTIONS;
  const [basicInfo, setBasicInfo] = React.useState({
    stacks: "",
  });
  const handleBasicInfo = (value, name) => {
    setBasicInfo({...basicInfo, [name]: value});
  };

  return (
    <>
      <TechSelectSection>
        <StyledSelect
          placeholder="사용할 기술 스택을 골라주세요."
          bordered={false}
          mode="multiple"
          maxTagCount="responsive"
          showArrow
          onChange={(value) => handleBasicInfo(value, "stacks")}
        >
          {STACKS.map(({title}, i) => (
            <Option key={i} value={title}>
              {title}
            </Option>
          ))}
        </StyledSelect>
      </TechSelectSection>
    </>
  );
};

export default Compound;

const TechSelectSection = styled.div`
  width: 20rem;
  height: 20rem;
`;

const StyledSelect = styled(Select)`
  padding: 10px 10px;
  width: 100%;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
  cursor: pointer;
`;
