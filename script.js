let laliga = 0
let copa_rey = 35


let bundesliga = 0
let kopal = 0
let superCopaAlema = 0

let laligaResultado = 0

const laliga_pontos = 50
const copa_rey_ponto = 50
const superCopaEspanha = 50

const bundesliga_pontos = 50
const kopal_pontos = 50
const superCopaAlema_pontos = 50


const premier_pontos = 50

const liga1_pontos = 50

const chanpions_league_ponto = 200

const intercontinetal_ponto = 100

const supercopaUEFA_ponto = 100

const mundialClubes_ponto = 400


document.getElementById("numeros_de_titulos_laliga").innerText = laliga
document.getElementById("numeros_de_titulos_copa_rey").innerText = copa_rey


    function mostrarEscolhas() {
        const select = document.getElementById("menuDeOpçoes");
        const valor = select.value;
    }

    function alerta() {
        
    }

    function f_input1() {
        laliga = parseInt(document.getElementById("input").value);
    }
    

    function somar2() {
        document.getElementById("pontos").innerText = "PONTOS " + laliga * laliga_pontos
        laligaResultado = laliga * laliga_pontos
    }
    function desabilitar() {
        var botao = document.getElementById("botao")
        botao.style.display = "none";
    }

    function controlador() {
        var imagem = document.getElementById("laliga_img")
        if (parseInt(laliga) === 1) {
            imagem.style.display = "block"
        } else {
            imagem.style.display = "none"
        }
    }
    

    function mudarPagina() {
        window.location.href = "resultado.html"
    }

    function somarTudo() {
        document.getElementById("somaTudo").innerHTML = laligaResultado
    }
    