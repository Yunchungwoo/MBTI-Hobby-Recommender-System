export const calculateMbtiScores = (answers) => {
    const scores = { "E/I": 0, "S/N": 0, "T/F": 0, "J/P": 0 };

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
  
    Object.keys(questionMapping).forEach((key) => {
        questionMapping[key].forEach((questionNumber) => {
          const answerValue = answers[`q${questionNumber}`] || "보통이다";
          scores[key] += responseMapping[answerValue];
        });
      });

    // 백분율 계산
    const percentages = Object.keys(scores).reduce((acc, key) => {
        acc[key] = Math.floor((scores[key] / (questionMapping[key].length * 5)) * 100);
      return acc;
    }, {});

    // MBTI 성향 결정
    const mbtiType = [
        percentages["E/I"] >= 50 ? "E" : "I",
        percentages["S/N"] >= 50 ? "S" : "N",
        percentages["T/F"] >= 50 ? "T" : "F",
        percentages["J/P"] >= 50 ? "J" : "P"
    ].join("");
    
    console.log("Answer:",answers);
    console.log("Scores:", scores);
    console.log("Percentages:", percentages);
    console.log("MBTI 유형:", mbtiType);
  
    return { scores, percentages, mbtiType };
};
