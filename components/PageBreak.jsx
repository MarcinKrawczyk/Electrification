import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
`;

const Button = styled.button`
  margin: 2rem 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`;

const Screen = ({ title, description, onComplete }) => (
  <div>
    <Title>{title}</Title>
    <p>{description}</p>
    <Button onClick={onComplete}>Continue</Button>
  </div>
);

export default Screen;
