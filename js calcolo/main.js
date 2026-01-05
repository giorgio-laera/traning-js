
const firstNumberEl = document.getElementById("first-number");
const secondNumberEl = document.getElementById("secondNumber");
const sendEl = document.getElementById("send");
const btnSommaEl = document.getElementById("btnSomma");
const btnDifferenzaEl = document.getElementById("btnDifferenza");
const btnMoltiplicazioneEl = document.getElementById("btnMoltiplicazione");
const btnDivisioneEl = document.getElementById("btnDivisione");


sendEl.addEventListener("click", function (event) {
    event.preventDefault();



    if (firstNumberEl.value != parseInt(firstNumberEl.value)) {
        alert("ATTENZIONE IL PRIMO NUMERO NON E VALIDO!!");
        return;
    } else if (secondNumberEl.value != parseInt(secondNumberEl.value)) {
        alert("ATTENZIONE IL SECONDO NUMERO NON E VALIDO!!");
    } else {
        console.log(`il primo numero è: ${firstNumberEl.value}`, `il secondo numero è:${secondNumberEl.value}`);
        document.querySelectorAll("btnContainer").classList.remove("dNone");

        btnSommaEl.addEventListener("click", function () {
          
            const sommaEl = document.getElementById("somma");
            sommaEl.innerHTML = firstNumberEl.value + secondNumberEl.value;
            sommaEl.classList.remove("dNone")
        })

        btnDifferenzaEl.addEventListener("click", function () {
            const differenzaEl = document.getElementById("differenza");
            differenzaEl.innerHTML = firstNumberEl.value - secondNumberEl.value;
            differenzaEl.classList.remove("dNone")
        })

        btnMoltiplicazioneEl.addEventListener("click", function () {
            const moltiplicazioneEl = document.getElementById("moltiplicazione");
            moltiplicazioneEl.innerHTML = firstNumberEl.value * secondNumberEl.value;
            moltiplicazioneEl.classList.remove("dNone")
        })

        btnDivisioneEl.addEventListener("click", function () {
            const divisioneEl = document.getElementById("divisione");
            divisioneEl.innerHTML = firstNumberEl.value / secondNumberEl.value;
            divisioneEl.classList.remove("dNone")
        })
    }


})



