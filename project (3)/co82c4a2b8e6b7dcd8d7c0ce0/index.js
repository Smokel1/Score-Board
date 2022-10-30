
let hs = 0
let gs = 0

document.getElementById("hs-el").textContent = hs
document.getElementById("gs-el").textContent = gs
let hsEl = document.getElementById("hs-el")
let gsEl = document.getElementById("gs-el")
function add1h() {
    hs += 1
    hsEl.textContent = hs
}
function add2h() {
    hs += 2
    hsEl.textContent = hs
}
function add3h() {
    hs += 3
    hsEl.textContent = hs
}

function add1g() {
    gs += 1
    gsEl.textContent = gs
}
function add2g() {
    gs += 2
    gsEl.textContent = gs
}
function add3g() {
    gs += 3
    gsEl.textContent = gs
}
