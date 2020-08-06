import styled from "styled-components";

const Card = styled.div`
  flexbasis: 45%;
  padding: 1rem;
  lineheight: 2.5rem;
  textalign: "left";
  color: "inherit";
  textdecoration: "none";
  border: 1px solid #dddddd;
  borderradius: "10px";
  transition: "color 0.15s ease, border-color 0.15s ease";
  cursor: pointer;

  & p {
    lineheight: 2.5rem;
  }
`;

const Choice = ({ text }) => (
  <Card>
    <p>{text} &rarr;</p>
  </Card>
);

export default Choice;
