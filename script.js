window.onload = function() {
    abrirModal();
};

function abrirModal() {
    document.getElementById("modalAuto").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalAuto").style.display = "none";
}

const sim = window.document.getElementById("sim")
const nao = window.document.getElementById("nao")

nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"
    estado = -1
    abrirModal()
    document.querySelector(".modalErro").innerHTML = "Obrigado"
    document.querySelector(".modalTry").innerHTML = "Isso significa muito para nós!"
}

nao.addEventListener("click", clicarnao)
function clicarnao(){
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"
    estado = -1
    abrirModal()
    document.querySelector(".modalErro").innerHTML = "Que!?"
    document.querySelector(".modalTry").innerHTML = "Desde quando tinha a opção de recusar? Volte lá e clique sim"
}