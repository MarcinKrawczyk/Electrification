import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
`;

const Button = styled.button`
  margin: 1rem 0;
`;

const Screen = ({ title, description, onComplete }) => (
  <div>
    <Title>{title}</Title>
    <p>{description}</p>
  </div>
);

export default Screen;
