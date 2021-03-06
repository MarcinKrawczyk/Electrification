import Head from "next/head";
import PageBreak from "../components/PageBreak.jsx";
import MultipleChoice from "../components/MultipleChoice.jsx";
import Result from "../components/Result.jsx";
import data from "../data/data.json";
import styled from "styled-components";
import { useState } from "react";
import { filterSections } from "../utils/filterData";
import { calculateResult } from "../utils/calculateResult";
import { cleanUpPoints } from "../utils/cleanUpPoints";

const result = {
  title: "Your results",
  type: "RESULT",
  descrption: "",
};

const Main = styled.div`
  textalign: "left";
`;

const Home = () => {
  const sections = filterSections(data.form.sections).concat(result);
  const [index, setIndex] = useState(0);
  const section = sections[index];
  const isMultipleChoice = section.type === "MULTIPLE_CHOICE";

  const onPageComplete = (answerIndex) => {
    if (isMultipleChoice) sections[index].answer = answerIndex;

    if (index === sections.length - 2) {
      calculateResult(sections, cleanUpPoints(data.points), data.score);
    }

    if (isMultipleChoice && sections[index].choices[answerIndex].goto) {
      const gotoSection = sections.find(
        (section) => section.title === sections[index].choices[answerIndex].goto
      );
      const gotoIndex = sections.indexOf(gotoSection);
      setIndex(gotoIndex);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Electrification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {section.type === "PAGE_BREAK" && (
          <PageBreak
            title={section.title}
            description={section.description}
            onComplete={onPageComplete}
          />
        )}
        {section.type === "MULTIPLE_CHOICE" && (
          <MultipleChoice
            title={section.title}
            choices={section.choices}
            onComplete={onPageComplete}
          />
        )}
        {section.type === "RESULT" && (
          <Result title={section.title} results={section.results} />
        )}
      </Main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: left;
          max-width: 500px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
