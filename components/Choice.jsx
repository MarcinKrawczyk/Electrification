import styled from "styled-components";

const Card = styled.div`
  flexbasis: 45%;
  padding: 1rem;
  lineheight: 2.5rem;
  textalign: "left";
  color: "inherit";
  border: 1px solid #dddddd;
  transition: "color 0.15s ease, border-color 0.15s ease";
  cursor: pointer;
  border-radius: 5px;

  & p {
    user-select: none;
  }
`;

const Choice = ({ text }) => (
  <Card>
    <p>{text} &rarr;</p>
  </Card>
);

export default Choice;
