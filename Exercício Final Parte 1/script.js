let n = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let val = [];

n.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('btnAdicionar').click();
    }
});


function adicionar() {
    const nValue = n.value;

    if (validacao0100(nValue) && !validaLista(nValue, val)) {
        val.push(Number(nValue));

        const option = document.createElement('option');
        option.textContent = `Valor ${nValue} adicionado`;
        lista.appendChild(option);

        res.innerHTML = '';
    } else {
        alert("Por favor, digite um número entre 1 e 100, e que não tenha sido adicionado ainda.");
    }

    n.value = '';
    n.focus();
}

function validacao0100(n) {
    n = Number(n);
    if (n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

function validaLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    } else {
        return false;
    }
}

function finalizar() {
    if (val.length === 0) {
        alert('Adicione números antes de calcular');
        return;
    }

    let quantidade = val.length;
    let maior = Math.max(...val);
    let menor = Math.min(...val);
    let soma = val.reduce((acc, n) => acc + n, 0);
    let media = soma / quantidade;

    res.innerHTML = `
        <p>Quantidade de números cadastrados: ${quantidade}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Soma de todos os valores: ${soma}</p>
        <p>Média dos números: ${media.toFixed(2)}</p>`;
}