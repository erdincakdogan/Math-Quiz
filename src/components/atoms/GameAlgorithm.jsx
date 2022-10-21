const GameAlgorithm = (props) => {
  const MAX_QUESTION_COUNT = 10;
  const MAX_POSSIBLE_RANDOM_NUMBER = 100;
  const MAX_POSSIBLE_NUMBER_SUM=49;
  const MAX_POSSIBLE_NUMBER_MULT=9;

  const gameLogic = (operations) => {
    let questionCollections = [];

    for (let a = 0; a < MAX_QUESTION_COUNT; a++) {
      //console.log(makeQuestion()[operations]())
      questionCollections.push(makeQuestion()[operations]());
    }

    return questionCollections;
  };

  //array shuffling
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  //generate random integer
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  //creating question object
  const makeQuestion = () => {
    let firstRandomValue = Math.floor(
      Math.random() * MAX_POSSIBLE_RANDOM_NUMBER
    );
    let secondRandomValue = Math.floor(
      Math.random() * MAX_POSSIBLE_RANDOM_NUMBER
    );
    let operations = {
      sum: () => makeSum(firstRandomValue, secondRandomValue),
      sub: () => makeSub(firstRandomValue, secondRandomValue),
      mult: () => makeMult(firstRandomValue, secondRandomValue),
      div: () => makeDiv(firstRandomValue),
    };
    return operations;
  };

  //sum const
  const makeSum = () => {
    let firstRandomValue= Math.floor(
      Math.random() * MAX_POSSIBLE_NUMBER_SUM
    );
    let secondRandomValue= Math.floor(
      Math.random() * MAX_POSSIBLE_NUMBER_SUM+1
    );
    let rightChoice = firstRandomValue + secondRandomValue;
    let firstRandomChoice = getRandomInt(1, 3);
    let secondRandomChoice = getRandomInt(1, 4);
    let choices = [
      rightChoice + firstRandomChoice,
      rightChoice - secondRandomChoice,
      rightChoice,
    ];

    return {
      question: firstRandomValue + " + " + secondRandomValue + " = ?",
      answer: firstRandomValue + secondRandomValue,
      choices: shuffle(choices),
      score: 2,
    };
  };

  //subtraction const
  const makeSub = (firstRandomValue, secondRandomValue) => {
    if (secondRandomValue > firstRandomValue) {
      let temp = secondRandomValue;
      secondRandomValue = firstRandomValue;
      firstRandomValue = temp;
    }
    let rightChoice = firstRandomValue - secondRandomValue;
    let firstRandomChoice = getRandomInt(1, 3);
    let secondRandomChoice = getRandomInt(1, 4);
    let choices = [
      rightChoice - firstRandomChoice,
      rightChoice + secondRandomChoice,
      rightChoice,
    ];
    return {
      question: firstRandomValue + " - " + secondRandomValue + " = ?",
      answer: firstRandomValue - secondRandomValue,
      choices: shuffle(choices),
      score: 3,
    };
  };

  // multiplication const
  const makeMult = () => {
    let firstRandomValue= Math.floor(
      Math.random() * MAX_POSSIBLE_NUMBER_MULT
    );
    let secondRandomValue= Math.floor(
      Math.random() * MAX_POSSIBLE_NUMBER_MULT
    );
    let rightChoice = firstRandomValue * secondRandomValue;
    let firstRandomChoice = getRandomInt(1, 3);
    let secondRandomChoice = getRandomInt(1, 4);
    let choices = [
      rightChoice + firstRandomChoice,
      rightChoice + secondRandomChoice + 2,
      rightChoice,
    ];
    return {
      question: firstRandomValue + " * " + secondRandomValue + " = ?",
      answer: firstRandomValue * secondRandomValue,
      choices: shuffle(choices),
      score: 4,
    };
  };

  //division const
  const makeDiv = () => {
    let firstRandomValue = Math.floor(
      Math.random() * MAX_POSSIBLE_RANDOM_NUMBER
    );
    let secondRandomValue = Math.floor(
      Math.random() * MAX_POSSIBLE_RANDOM_NUMBER
    );
    while (
      firstRandomValue < secondRandomValue ||
      firstRandomValue % secondRandomValue !== 0
    ) {
      firstRandomValue = Math.floor(Math.random() * MAX_POSSIBLE_RANDOM_NUMBER);
      secondRandomValue = Math.floor(
        Math.random() * MAX_POSSIBLE_RANDOM_NUMBER
      );
    }
    let rightChoice = Math.floor(firstRandomValue / secondRandomValue);
    let firstRandomChoice = getRandomInt(1, 3);
    let secondRandomChoice = getRandomInt(1, 4);
    let choices = [
      rightChoice - firstRandomChoice,
      rightChoice + secondRandomChoice,
      rightChoice,
    ];

    return {
      question: firstRandomValue + " ÷ " + secondRandomValue + " = ?",
      answer: rightChoice,
      choices: shuffle(choices),
      score: 5,
    };
  };
  return gameLogic(props);
};

export default GameAlgorithm;
