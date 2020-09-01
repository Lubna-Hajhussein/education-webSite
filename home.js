const formEl = document.querySelector("#patternData")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = Array.from(e.srcElement)
    const patternData = {
        Range:data[0].value,
        CharacterSets:data[1].value,
        RepeatingCharacters:data[2].value,
        Metacharacters:data[3].value,
        SpecialCaharacters:data[4].value
    }
  localStorage.setItem("pattern",JSON.stringify(patternData))
  location.assign("./pattern.html")
})

