document.getElementById("travelForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obter os valores do formulário
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var notes = document.getElementById("notes").value;
    var image = document.getElementById("image").files[0];

    // Criar um objeto FormData para enviar os dados
    var formData = new FormData();
    formData.append("destination", destination);
    formData.append("date", date);
    formData.append("notes", notes);
    formData.append("image", image);

    // Fazer a requisição HTTP POST para a função do Azure
    fetch('URL_DA_SUA_FUNCAO_DO_AZURE', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao registrar viagem');
        }
        return response.json();
    })
    .then(data => {
        // Aqui você pode manipular a resposta da função do Azure, se necessário
        console.log('Viagem registrada com sucesso:', data);
        // Exemplo de redirecionamento após o registro
        window.location.href = 'saudacao.html';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
