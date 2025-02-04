function enviarFicha(){
    let nome = document.getElementById('nome').value;
    let nomeMae = document.getElementById('nomeMae').value;
    let endereco = document.getElementById('enderoco').value;
    let tel = document.getElementById('tel').value; 
    let idade = document.getElementById('idade').value;
   


    let qualSexo = document.querySelector('input[name="sexo"]:checked');

    if(
        nome == "" ||
        nomeMae == "" ||
        endereco  =="" ||
        tel == ""||
        idade == " "||
        !qualSexo
    ){
        alert("Por favor, preencha todos os campos antes de enviar.")
        return;
    }
    
    idade = parseInt(idade)
    if (idade < 15 || idade > 18){
        alert("A idade precisa ser entre 15 à 28 anos para realizar o encontro")
        return;
    }
    
    alert("Inscrição realizada com sucesso" + nome + "!")
 
}







