document.getElementById("travelForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var notes = document.getElementById("notes").value;
    var image = document.getElementById("image").files[0];

    var formData = new FormData();
    formData.append("destination", destination);
    formData.append("date", date);
    formData.append("notes", notes);
    formData.append("image", image);
   
    fetch('https://agendaviagem.azurewebsites.net', {
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
        console.log('Viagem registrada com sucesso:', data);        
        window.location.href = 'saudacao.html';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
