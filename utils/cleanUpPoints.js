export const cleanUpPoints = (points) => {
  let lastQuestion;
  points.forEach((row, index) => {
    if (row[0] === "") row[0] = points[index - 1][0];
  });

  return points;
};
