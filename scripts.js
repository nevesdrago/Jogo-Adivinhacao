let numero_aleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector(".palpites");
const ultimo_resultado = document.querySelector(".ultimo_resultado");
const baixo_alto = document.querySelector(".baixo_alto");
const campo_palpite = document.querySelector(".campo_palpite");
const enviar_palpite = document.querySelector(".enviar_palpite");
let contador = 1;
let resetar;

enviar_palpite.addEventListener("click", checar_palpite)

function checar_palpite() {
    const palpite_user = Number(campo_palpite.value);
    if (contador === 1) {
        palpites.textContent = "Palpites Anteriores: ";
    }

    palpites.textContent += palpite_user + " ";
    
    if (palpite_user === numero_aleatorio) {
        ultimo_resultado.textContent = "Você acertou!";
        ultimo_resultado.style.backgroundColor = "green";
        baixo_alto.textContent = "";
        fim_jogo();
    }
    else if (contador === 10) {
        ultimo_resultado.textContent = "Fim de Jogo!";
        baixo_alto.textContent = "";
        fim_jogo();
    }
    else {
        ultimo_resultado.textContent = "Errado!";
        ultimo_resultado.style.backgroundColor = "red";
        if (palpite_user < numero_aleatorio) {
            baixo_alto.textContent = "Número muito baixo. Tente novamente!";
        }
        else if (palpite_user > numero_aleatorio) {
            baixo_alto.textContent = "Número muito alto. Tente novamente!";
        }
    }

    contador ++;
    campo_palpite.value = "";
    campo_palpite.focus()

}

function fim_jogo() {
    campo_palpite.disabled = true;
    enviar_palpite.disabled = true;
    resetar = document.createElement("button");
    resetar.textContent = "Começar novo jogo!";
    document.body.appendChild(resetar);
    resetar.addEventListener("click", reset_jogo);

}

function reset_jogo() {
    contador = 1;
    const reset_paras = document.querySelectorAll(".resultado_paras p");
    for (const reset_para of reset_paras) {
        reset_para.textContent = "";

    }
    resetar.parentNode.removeChild(resetar);
    campo_palpite.disabled = false;
    enviar_palpite.disabled = false;
    campo_palpite.value = "";
    campo_palpite.focus();
    ultimo_resultado.style.backgroundColor = "white";
    numero_aleatorio = Math.floor(Math.random() * 100) + 1;
}