let hover = document.querySelector("#hover");

hover.addEventListener("mouseover", glow)

function glow() {
    hover.classList.add("glow")
}

hover.addEventListener("mouseout", glowOut)

function glowOut() {
    hover.classList.remove("glow")
}
