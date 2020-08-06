import Head from "next/head";
import PageBreak from "../components/PageBreak.jsx";
import MultipleChoice from "../components/MultipleChoice.jsx";
import Result from "../components/Result.jsx";
import data from "../data/data.json";
import styled from "styled-components";
import { useState } from "react";
import { filterSections } from "../utils/filterData";

const result = {
  title: "Result",
  type: "RESULT",
  description: "Your result is: ",
};

const Main = styled.div`
  textalign: "left";
`;

const Home = () => {
  const sections = filterSections(data.form.sections).concat(result);
  const [index, setIndex] = useState(0);
  const section = sections[index];

  const onPageComplete = (answerIndex) => {
    if (section.type === "MULTIPLE_CHOICE")
      sections[index].answer = answerIndex;

    setIndex(index + 1);
  };

  console.log(sections);

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
          <Result title={section.title} description={section.description} />
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
