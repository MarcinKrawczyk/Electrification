export const calculateResult = (sections, points, score) => {
  const minimalScore = score[1];

  const questions = sections.filter(
    (section) => section.type === "MULTIPLE_CHOICE"
  );

  const categories = getCategories(points);

  questions.forEach((question) => {
    points.forEach((row) => {
      if (question.answer !== undefined) {
        const sameQuestion = question.title === row[0];
        const sameAnswer = question.choices[question.answer].value === row[1];
        if (sameQuestion && sameAnswer) {
          categories.forEach((category, index) => {
            categories[index].score = categories[index].score + row[index + 2];
          });
        }
      }
    });
  });

  sections[sections.length - 1].results = categories
    .filter((category) => category.score >= minimalScore)
    .sort((a, b) => (a.score > b.score && -1) || 1)
    .map((category) => `${category.name} (score: ${category.score})`);
};

const getCategories = (points) => {
  return points[0].slice(2).map((category) => ({
    name: category,
    score: 0,
  }));
};
