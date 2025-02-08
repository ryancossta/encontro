function Enviar() {
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const nomeMae = document.getElementById('nomeMae').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('tel').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.querySelector('input[name="sexo"]:checked');

    // Validação dos campos
    const erros = [];

    if (!nome || nome === "Nome Completo") {
        erros.push("Por favor, preencha seu nome completo.");
    }

    if (!nomeMae || nomeMae === "Nome da mãe") {
        erros.push("Por favor, preencha o nome da sua mãe.");
    }

    if (!endereco || endereco === "Endereço") {
        erros.push("Por favor, preencha seu endereço.");
    }

    if (!telefone || telefone === "Telefone") {
        erros.push("Por favor, preencha seu telefone.");
    }

    if (!idade || idade < 15 || idade > 28) {
        erros.push("Você não tem a idade adequada para realizar o Encontro de jovens.");
    }

    if (!sexo) {
        erros.push("Por favor, selecione seu sexo.");
    }

    // Se houver erros, exibir todos de uma vez
    if (erros.length > 0) {
        alert(erros.join("\n")); // Exibe todos os erros em uma única mensagem
        return;
    }

    // Se todas as validações passarem, exibir os dados
    alert(`Inscrição realizada com sucesso!`);
}




