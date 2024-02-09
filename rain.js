
function digitarOperacao(value) {
    document.getElementById('display').value += value;
}

function limpar() {
    document.getElementById('display').value = '';
}

function calcular() {
    let valor = document.getElementById('display').value;
    let resultado;

    try {
        resultado = eval(valor);
        document.getElementById('display').value = resultado;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
