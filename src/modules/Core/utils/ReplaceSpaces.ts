const ReplaceSpaces = (word: string) => {
  const letters = word.split("").map((elem) => (elem === " " ? "_" : elem));
  return letters.join("");
};

export default ReplaceSpaces;
