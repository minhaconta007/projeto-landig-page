var setadireita = window.document.getElementById("setadireita")
var leoardo =window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    leonardo.style ="display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "disply:flex;"
}

function rolarparaesquerda() {
    bruna.style = "display:none"
    leoardo.style = "display:flex"
    setaesquerda.style = "disply:none"
    setadireita.style = "display:flex"
}