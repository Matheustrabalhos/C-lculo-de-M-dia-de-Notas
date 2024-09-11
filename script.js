document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    // Obtendo valores das notas
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const grade4 = parseFloat(document.getElementById('grade4').value);

    // Calculando a média
    const average = (grade1 + grade2 + grade3 + grade4) / 4;

    // Determinando se o aluno está aprovado ou reprovado
    const resultElement = document.getElementById('result');
    let resultText;

    if (average >= 7) {
        resultText = `Aprovado! Média: ${average.toFixed(1)}`;
    } else {
        resultText = `Reprovado. Média: ${average.toFixed(1)}`;
    }

    // Exibindo o resultado no console e em um alerta
    console.log(resultText);
    alert(resultText);
    
    // Exibindo o resultado na página
    resultElement.textContent = resultText;
});
