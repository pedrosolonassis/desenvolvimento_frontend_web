document.getElementById('meuForm').addEventListener('submit', (e) => {
    // Impede o envio padrão do formulário
    e.preventDefault();

    // Capturando os valores dos campos principais
    const grupo = document.getElementById('grupo').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Validação simples com base na aula (checando se estão vazios após remover espaços)
    if (grupo.trim() === '' || nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios (Nome do Grupo, Seu Nome e E-mail)!');
    } else {
        // Redireciona para a página de obrigado se a validação passar
        window.location.href = 'obrigado.html';
    }
});