
patternsArr.forEach((pattern, index) => {
  let InputOne = pattern.Input1;
  let InputTwo = pattern.Input2;
  let userPattern = pattern.outputPatt;
  pattern.patternEl.addEventListener("submit", (e) => {
    e.preventDefault();
    isExiste = InputTwo.value === undefined ? "" : InputTwo.value;
    const errors =index >= 3 &&(isNaN(Number(InputTwo.value)) !== isNaN(Number(InputOne.value)) ||InputOne.value >= InputTwo.value || InputOne.value > 9 || InputTwo.value > 9);
    if (errors) {
      InputOne.value = "";
      InputTwo.value = "";
      userPattern.setAttribute(
        "style",
        "color:red;  font-size: 11px; position: absolute; left: 50%; right: 50%; width: 800px;"
      );
      userPattern.innerHTML = "invalid RegEx";
      throw Error("invalid RegEx");
    }
    userPattern.setAttribute(
      "style",
      "position: absolute; left: 50%; right: 50%; width: 800px;"
    );
    let input =pattern.startChar +InputOne.value +pattern.middleChar +isExiste +pattern.endChar;
    input = index === 4 || index === 5   ? (input += `{${pattern.Input3.value + pattern.comma}}`)   : input;
    input = index === 6   ? (input += `{${pattern.Input3.value},${pattern.Input4.value}}`)   : input;
    if (pattern.Input3 !== undefined) {
      pattern.Input3.value = "";
    }
    if (pattern.Input4 !== undefined) {
      pattern.Input4.value = "";
    }
    const flag = pattern.selectorG.value;
    userPattern.textContent = new RegExp(input, flag);
    InputOne.value = "";
    InputTwo.value = "";
  });
  pattern.restartImg.addEventListener("click", () => {
    userPattern.textContent = "";
  });
});
