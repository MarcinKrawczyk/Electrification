export const filterSections = (sections) => {
  return sections.filter((section, index) => {
    return !(
      section.type === "PAGE_BREAK" &&
      index < sections.length - 1 &&
      sections[index + 1].type === "MULTIPLE_CHOICE" &&
      section.title === sections[index + 1].title
    );
  });
};
