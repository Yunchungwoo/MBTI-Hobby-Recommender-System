export const calculateMbtiScores = (answers) => {
    const questionMapping = {
      "E/I": [1, 6, 11, 16, 21, 26, 31, 36],
      "S/N": [2, 7, 12, 17, 22, 27, 32, 37],
      "T/F": [3, 8, 13, 18, 23, 28, 33, 38],
      "J/P": [4, 9, 14, 19, 24, 29, 34, 39]
    };
  
    const responseMapping = {
      "전혀 아니다": 1,
      "아니다": 2,
      "보통이다": 3,
      "그렇다": 4,
      "아주 그렇다": 5
    };
  
    const scores = { "E/I": 0, "S/N": 0, "T/F": 0, "J/P": 0 };
  
    Object.keys(questionMapping).forEach((key) => {
      questionMapping[key].forEach((questionNumber) => {
        const answerValue = answers[`q${questionNumber}`];
        if (responseMapping[answerValue]) {
          scores[key] += responseMapping[answerValue];
        }
      });
    });
  
    const percentages = Object.keys(scores).reduce((acc, key) => {
      acc[key] = (scores[key] / (questionMapping[key].length * 5)) * 100;
      return acc;
    }, {});
  
    return { scores, percentages };
  };
  