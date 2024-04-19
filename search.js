document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário

        var searchValue = document.getElementById('search').value; // Obtém o valor do campo de entrada

        // Aqui você pode adicionar o código para realizar a busca com o valor obtido
        console.log('Buscar contato com o nome:', searchValue);
    });
});