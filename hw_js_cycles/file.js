function guess() {
  let userInput;
  let start = 0,
    end = 100,
    middle;

  while (true) {
    middle = Math.floor((start + end) / 2);
    userInput = prompt(`Is your number ${middle}. Enter y, g, l.`);
    if (userInput === "y") {
      console.log("Guessed");
      break;
    }
    if (userInput === "l") {
      end = middle;
    }
    if (userInput === "g") {
      start = middle;
    }
  }
}
guess()