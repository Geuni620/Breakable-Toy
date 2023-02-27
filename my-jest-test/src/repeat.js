function repeat(word, times = 2) {
  let words = [];
  for (let i = 0; i < times; i++) {
    words.push(word);
  }
  return words;
}

export default repeat;
