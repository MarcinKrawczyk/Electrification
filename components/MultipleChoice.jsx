import styled from "styled-components";
import Choice from "./Choice.jsx";

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
`;

const RadioRow = styled.div`
  margin: 1rem 0;
`;

const Question = ({ title, choices, onComplete }) => (
  <div>
    <Title>{title}</Title>
    {choices.map((choice, index) => (
      <RadioRow key={`choice-${index}`} onClick={() => onComplete(index)}>
        <Choice text={choice.value} />
      </RadioRow>
    ))}
  </div>
);

export default Question;
