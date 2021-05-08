const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
function countWords(paragraph, word1, word2) {
  const wordCount1 = paragraph.split(word1).length - 1;
  const wordCount2 = paragraph.split(word2).length - 1;
  if (wordCount1 === wordCount2) {
    console.log(`Both The word ${word1} and ${word2} are Equally occurred.`);
  } else if (wordCount1 > wordCount2) {
    console.log(`The word ${word1} more frequently occurred than ${word2}.`);
  } else {
    console.log(`The word ${word2} more frequently occurred than ${word1}.`);
  }
}

countWords(paragraph, "love", "you");
