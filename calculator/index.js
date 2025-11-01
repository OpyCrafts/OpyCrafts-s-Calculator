"use strict";

const screen = document.querySelector(".Calculator__screen");
const buttons = document.querySelectorAll(".row button");

let currentScreen = "";

//   add click to each button pressed
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    // to get the button contents
    const value = button.textContent;

    // to make the scrren blank at all time
    if (value === "C") {
      currentScreen = "";

      // what happen when the button pressssed is backspace
    } else if (value === "⌫") {
      // this is what happen after the button pressed is backspace
      if (currentScreen === "error") {
        currentScreen = "";
      } else {
        currentScreen = currentScreen.slice(0, -1);
      }

      // what happen when the button pressssed is equal

      // what happen when the button pressssed is equal
    } else if (value === "=") {
      if (currentScreen === "") {
        currentScreen = "";
      } else {
        try {
          currentScreen = eval(currentScreen).toString();
        } catch {
          currentScreen = "error";
        }
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "."
    ) {
      if (currentScreen === "" || currentScreen === "error") {
        return;
      } else {
        currentScreen += value;
      }
    } else {
      if (currentScreen === "error") {
        return;
      } else {
        currentScreen += value;
      }
    }
    screen.value = currentScreen;
  });
});

// const bracketOpen = document.querySelector(".bracketopen");
// const bracketClose = document.querySelector(".bracketclose");
// const btnCancel = document.querySelector(".btncancel");
// const backSpace = document.querySelector(".backspace");
// const dot = document.querySelector(".btn--x");

// const equalTo = document.querySelector(".equalto");
// const divider = document.querySelector(".divider");
// const multiply = document.querySelector(".multiplier");
// const sub = document.querySelector(".subtract");
// const add = document.querySelector(".addition");

// const btn1 = document.querySelector(".btn--1");
// const btn2 = document.querySelector(".btn--2");
//  const btn3 = document.querySelector(".btn--3");
//    const btn4 = document.querySelector(".btn--4");
//     const btn5 = document.querySelector(".btn--5");
//      const btn6 = document.querySelector(".btn--6");
//       const btn7 = document.querySelector(".btn--7");
//        const btn8 = document.querySelector(".btn--8");
//         const btn9 = document.querySelector(".btn--9");
