import {useRef, useState} from "react";
import styled from "styled-components";

const index = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();

    if ((parentRef.current && childRef.current) === null) return;

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.style.height}px`;
    }
  };

  return (
    <Container>
      <Header>
        보이나?
        <Button>열기</Button>
      </Header>
      <Wrapper>
        <Contents>안녕하세요 테스트하고 있습니다 반갑습니다.</Contents>
      </Wrapper>
    </Container>
  );
};

export default index;

const Container = styled.div`
  background-color: red;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  height: 32px;
  margin: 0 32px 0 8px;
  color: white;
  font-weight: 700;
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

const Contents = styled.div``;
