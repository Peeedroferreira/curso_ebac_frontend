document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-deposito');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const campoA = document.getElementById('campo-A');
        const campoB = document.getElementById('campo-B');
        
        if (campoA && campoB) {
            const valorA = Number(campoA.value);
            const valorB = Number(campoB.value);
            const mensagemDiv = document.getElementById('mensagem');

            mensagemDiv.style.display = 'block';
            mensagemDiv.style.borderColor = '';
            mensagemDiv.style.backgroundColor = '';
            mensagemDiv.style.color = '';


            
            if (valorB > valorA) {
                mensagemDiv.innerHTML = "<p>O número B (" + valorB + ") é maior que o número A (" + valorA + ").</p>";
                mensagemDiv.style.borderColor = 'green';
                mensagemDiv.style.backgroundColor = '#dff0d8';
                mensagemDiv.style.color = 'green';                
            } else if (valorB < valorA) {
                mensagemDiv.innerHTML = "<p>O número B (" + valorB + ") não é maior que o número A (" + valorA + ").</p>";
                mensagemDiv.style.borderColor = 'red';
                mensagemDiv.style.backgroundColor = '#f2dede';
                mensagemDiv.style.color = 'red';
            } else {
                mensagemDiv.innerHTML = "<p>Os números A e B são iguais.</p>";
                mensagemDiv.style.borderColor = '#ffd700'
                mensagemDiv.style.backgroundColor = '#ffffe0';
                mensagemDiv.style.color = '#ffd700';
            }
        } else {
            console.error('Um ou mais elementos do formulário não foram encontrados.');
        }
    });
});
