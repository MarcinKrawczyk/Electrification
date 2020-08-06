export const calculateResult = (sections, points) => {
  const questions = sections.filter(
    (section) => section.type === "MULTIPLE_CHOICE"
  );

  let pureElectricPoints = 0;
  let pluginHybridPoints = 0;

  questions.forEach((question) => {
    points.forEach((row) => {
      const sameQuestion = question.title === row[0];
      const sameAnswer = question.choices[question.answer].value === row[1];

      if (sameQuestion && sameAnswer) {
        pureElectricPoints = pureElectricPoints + row[2];
        pluginHybridPoints = pluginHybridPoints + row[3];
      }
    });
  });

  sections[sections.length - 1].description = getResultMessage(
    pureElectricPoints,
    pluginHybridPoints
  );
};

const getResultMessage = (pureElectricPoints, pluginHybridPoints) => {
  const results = [];
  if (pureElectricPoints >= 2) results.push("Pure Electric");
  if (pluginHybridPoints >= 2) results.push("Plug-In Hybrid");
  return results.join(" and ");
};
