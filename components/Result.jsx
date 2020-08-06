import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
`;

const Result = styled.p`
  margin: 0.25rem 0;
`;

const Screen = ({ title, results, onComplete }) => (
  <div>
    <Title>{title}</Title>
    {results &&
      results.map((result, index) => {
        return <Result key={`result-${index}`}>{result}</Result>;
      })}
  </div>
);

export default Screen;
