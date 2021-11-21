let pick = document.querySelectorAll("button");
let higherOperand = document.querySelectorAll(".span-two");

function listenForOperand() {
  // this listens out for the click on 'AC' and '=' operands
  for (let i = 0; i < higherOperand.length; i++) {
    higherOperand[i].addEventListener("click", (e) => {
      const clicked = higherOperand.id;
      console.log(clicked);
    });
  }
}

// loop through each numerical button
pick.forEach((button) => {
  // listen for click
  button.addEventListener("click", () => {
    // store that option in a variable and display it
    const clicked = button.id;
    console.log(clicked);
  });
});

listenForOperand();
