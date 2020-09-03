const formEl = document.querySelector("#patternData")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = Array.from(e.srcElement)
    const patternData = {
        Range:data[0].value,
        ExcludeSets:data[1].value,
        CharacterSets:data[2].value,
        RepeatingCharacters:data[3].value
    }
  localStorage.setItem("pattern",JSON.stringify(patternData))
  location.assign("./pattern.html")
})

