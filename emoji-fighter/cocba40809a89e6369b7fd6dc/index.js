let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let ran1= Math.floor(Math.random()*fighters.length)
    let ran2 = Math.floor(Math.random()*fighters.length)
    console.log(ran1)
    console.log(ran2)
    stageEl.textContent = fighters[ran1] + " vs " + fighters[ran2]
})
