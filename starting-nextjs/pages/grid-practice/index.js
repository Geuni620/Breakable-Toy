import React from "react";
import styled from "styled-components";

const Grid = () => {
  return (
    <Container>
      <Item className="item">A</Item>
      <Item className="item">B</Item>
      <Item className="item">C</Item>
      <Item className="item">D</Item>
      <Item className="item">E</Item>
      <Item className="item">F</Item>
      <Item className="item">G</Item>
      <Item className="item">H</Item>
      <Item className="item">I</Item>
    </Container>
  );
};

export default Grid;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 20% 20% 40%;
//   /* grid-template-rows: 1fr 1fr 1fr; */

//   /* grid-template-columns: repeat(3, 33.333333%); */
//   /* grid-template-columns: repeat(3, minmax(100px, auto)); */
//   /* grid-template-columns: repeat(auto-fill, minmax(20%, auto)); */

//   /* row-gap: 10px; */
//   /* column-gap: 30px; */
//   /* gap: 10px 20px; */

//   gap: 20px;
//   grid-gap: 20px;

//   & :nth-child(1) {
//     /* grid-column: 1/3; */
//     /* grid-row: 1/2; */
//     background-color: red;

//     grid-column: 1 / span 2;
//     grid-row: 1 / span 3;
//   }
// `;

const Container = styled.div`
  display: grid;

  grid-template-areas:
    "header header header"
    "   a    main    b   "
    "   .     .      .   "
    "footer footer footer";

  .header {
    grid-area: header;
  }
  .sidebar-a {
    grid-area: a;
  }
  .main-content {
    grid-area: main;
  }
  .sidebar-b {
    grid-area: b;
  }
  .footer {
    grid-area: footer;
  }
`;

const Item = styled.div``;
