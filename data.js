let patternsArr = [
    {
      name:"defaultPattern",
      patternEl: document.querySelector("#patternOne"),
      outputPatt: document.querySelector("#pattOne"),
      Input1: document.querySelector("#charOne"),
      Input2: "",
      startChar: "",
      endChar: "",
      middleChar: "",
      selectorG: document.querySelector("#selOne"),
      restartImg: document.querySelector("#restartOne"),
    },
  
    { 
      name:"CharacterSets",
      patternEl: document.querySelector("#patternTwo"),
      outputPatt: document.querySelector("#pattTwo"),
      Input1: document.querySelector("#charTwo"),
      Input2: "",
      startChar: "[",
      endChar: "]",
      middleChar: "",
      selectorG: document.querySelector("#selTwo"),
      restartImg: document.querySelector("#restartTwo"),
    },
  
    {
      name:"ExcludeSets",
      patternEl: document.querySelector("#patternThree"),
      outputPatt: document.querySelector("#pattThree"),
      Input1: document.querySelector("#charThree"),
      Input2: "",
      startChar: "[^",
      endChar: "]",
      middleChar: "",
      selectorG: document.querySelector("#selThree"),
      restartImg: document.querySelector("#restartThree"),
    },
  
    {
      name:"Range",
      patternEl: document.querySelector("#patternFour"),
      outputPatt: document.querySelector("#pattFour"),
      Input1: document.querySelector("#charFour1"),
      Input2: document.querySelector("#charFour2"),
      startChar: "[",
      middleChar: "-",
      endChar: "]",
      selectorG: document.querySelector("#selFour"),
      restartImg: document.querySelector("#restartFour"),
    },
    {
      name:"RepeatingCharacters",
      patternEl: document.querySelector("#patternFive"),
      outputPatt: document.querySelector("#pattFive"),
      Input1: document.querySelector("#charFive1"),
      Input2: document.querySelector("#charFive2"),
      Input3: document.querySelector("#charFive3"),
      comma: "",
      startChar: "[",
      middleChar: "-",
      endChar: "]",
      selectorG: document.querySelector("#selFive"),
      restartImg: document.querySelector("#restartFive"),
    },
    {
      name:"RepeatingCharacters",
      patternEl: document.querySelector("#patternSex"),
      outputPatt: document.querySelector("#pattSex"),
      Input1: document.querySelector("#charSex1"),
      Input2: document.querySelector("#charSex2"),
      Input3: document.querySelector("#charSex3"),
      comma: ",",
      startChar: "[",
      middleChar: "-",
      endChar: "]",
      selectorG: document.querySelector("#selSex"),
      restartImg: document.querySelector("#restartSex"),
    },
    {
      name:"RepeatingCharacters",
      patternEl: document.querySelector("#patternSeven"),
      outputPatt: document.querySelector("#pattSeven"),
      Input1: document.querySelector("#charSeven1"),
      Input2: document.querySelector("#charSeven2"),
      Input3: document.querySelector("#charSeven3"),
      Input4: document.querySelector("#charSeven4"),
      startChar: "[",
      middleChar: "-",
      endChar: "]",
      selectorG: document.querySelector("#selSeven"),
      restartImg: document.querySelector("#restartSeven"),
    },
  ];
