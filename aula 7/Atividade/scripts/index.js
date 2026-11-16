function executar(event) {
    event.preventDefault();
    limparForm();
    validarForm();
}

//() => {} arrow function  
function validarForm() {
    const nome = document.querySelector("#nome").value;
    const erroNome = document.querySelector("#erro-nome");
    if (nome === "") {
        erroNome.textContent = "Nome não pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade").value;
    const erroIdade = document.querySelector("#erro-idade");
    if (idade === "") {
        erroIdade.textContent = "Idade não pode estar vazio!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }    else if (Number(idade) < 18) {
        erroIdade.textContent = "É necessário ter 18 anos!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

 // VALIDAR O EMAIL COM REGEX
    const email = document.querySelector("#email").value;
    const erroEmail = document.querySelector("#erro-email");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const termos = document.querySelector("#termos");
  const erroTermos = document.querySelector("#erro-termos");
  if (termos.checked === false) {
    erroTermos.textContent = "É preciso aceitar os termos!";
    erroTermos.classList.add("erro");
    erroTermos.classList.remove("oculto");
  }
}

function limparForm() {
    document.querySelectorAll(".erro").forEach( (item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    });
}