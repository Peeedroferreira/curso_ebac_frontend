// Toggle do modo noturno e atualização do texto do botão
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('table').classList.toggle('dark-mode');
    document.querySelector('form').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    
    this.textContent = isDarkMode ? 'Modo Claro' : 'Modo Noturno';
});
