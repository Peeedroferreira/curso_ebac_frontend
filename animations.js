// Estilos de animação para novas linhas na tabela
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes newRowEntry {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}`;
document.head.appendChild(styleSheet);
