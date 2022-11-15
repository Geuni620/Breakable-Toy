import {useRef, useState} from "react";
import styled from "styled-components";

const index = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  // const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log(childRef.current.clientHeight);

    if ((parentRef.current && childRef.current) === null) return;

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
  };

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

  return (
    <Container>
      <Header>
        보이나?
        <Button onClick={handleButtonClick}>{buttonText}</Button>
      </Header>
      <Wrapper ref={parentRef}>
        <Contents ref={childRef}>
          안녕하세요 테스트하고 있습니다 반갑습니다.
          <br />
          안녕하세요 테스트하고 있습니다 반갑습니다.
          <br />
          안녕하세요 테스트하고 있습니다 반갑습니다.
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: red;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  height: 32px;
  margin: 0 32px 0 8px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const Button = styled.button`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;

const Wrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
`;

const Contents = styled.div`
  padding: 4px 8px;
  background-color: black;
  color: white;
`;
