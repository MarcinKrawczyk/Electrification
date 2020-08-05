import Head from "next/head";
import Info from "../components/Info.jsx";
import Question from "../components/Question.jsx";
import data from "../data/data.json";
import styled from "styled-components";
import { useState } from "react";
import { filterSections } from "../utils/filterData";

const Main = styled.div`
  textalign: "left";
`;

const Home = () => {
  const sections = filterSections(data.form.sections);
  //const [sections, setSections] = useState(filterSections(data.form.sections));
  console.log("sections", sections);
  const [index, setIndex] = useState(0);
  const section = sections[index];

  const onPageComplete = (answerIndex) => {
    console.log("answerIndex", answerIndex);
    if (section.type === "MULTIPLE_CHOICE") sections[index].answer = index;
    //setSections(sections)
    console.log(sections);
    setIndex(index + 1);
  };

  console.log("section", section);

  return (
    <div className="container">
      <Head>
        <title>Electrification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {section.type === "PAGE_BREAK" && (
          <Info
            title={section.title}
            description={section.description}
            onComplete={onPageComplete}
          />
        )}
        {section.type === "MULTIPLE_CHOICE" && (
          <Question
            title={section.title}
            choices={section.choices}
            onComplete={onPageComplete}
          />
        )}
      </Main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
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
