function applyPhoneMask(event) {
    const inputField = event.target;
    let numbers = inputField.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const phoneType = document.getElementById('phone-type').value;

    // Define o limite de dígitos com base no tipo de telefone
    const limit = phoneType === 'fixo' ? 10 : 11;

    // Aplica o limite de dígitos
    if (numbers.length > limit) {
        numbers = numbers.substring(0, limit);
    }

    let formattedNumber = '';

    // Insere os caracteres de formatação
    if (numbers.length > 2) {
        formattedNumber += '(' + numbers.substring(0, 2) + ') ';
        numbers = numbers.substring(2);
    }
    if (phoneType === 'fixo' && numbers.length > 4) {
        formattedNumber += numbers.substring(0, 4) + '-';
        numbers = numbers.substring(4);
    } else if (phoneType === 'celular' && numbers.length > 5) {
        formattedNumber += numbers.substring(0, 5) + '-';
        numbers = numbers.substring(5);
    }

    // Se não atingiu o limite para inserir o '-', apenas concatena o que foi digitado
    formattedNumber += numbers;

    inputField.value = formattedNumber;
}

// Adiciona os event listeners
document.getElementById('phone').addEventListener('input', applyPhoneMask);
document.getElementById('phone-type').addEventListener('change', function() {
    document.getElementById('phone').value = '';
    applyPhoneMask({ target: document.getElementById('phone'), inputType: "manualChange" });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phoneWithMask = document.getElementById('phone').value;
    const phoneType = document.getElementById('phone-type').value;
    const phoneNumbersOnly = phoneWithMask.replace(/\D/g, '');

    if (name.trim() === "" || phoneNumbersOnly.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if ((phoneType === "fixo" && phoneNumbersOnly.length !== 10) ||
        (phoneType === "celular" && phoneNumbersOnly.length !== 11)) {
        alert(`Por favor, insira um número de ${phoneType} válido.`);
        return;
    }

    const table = document.getElementById('contact-table').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].textContent === name && table.rows[i].cells[1].textContent === phoneWithMask) {
            alert("Este nome e telefone já foram cadastrados.");
            return;
        }
    }

    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phoneWithMask;
    cell2.className = 'telephone';

    newRow.style.animation = "newRowEntry 0.5s forwards";

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('phone-type').value = 'fixo'; // Reseta o seletor para o padrão
});

