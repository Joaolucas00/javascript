function contar() {
    var txt_inicio = document.getElementById('iinicio')
    var inicio = Number(txt_inicio.value)

    var txt_fim = document.getElementById('ifim')
    var fim = Number(txt_fim.value)

    var txt_passo = document.getElementById('ipasso')
    var passo = Number(txt_passo.value)

    var span_contagem = document.getElementById('contagem')

    if (passo == 0) {
        passo = 1
    }

    if (passo < 0) {
        passo *= -1
    }

    if (inicio < fim) {
        for (cc = inicio; cc <= fim; cc += passo) {
            span_contagem.innerHTML += cc + '\u{1F449}'
        }
        span_contagem.innerHTML += '\u{1F3C1}'
    } else if (inicio > fim) {
        for (cc = inicio; cc >= fim; cc -= passo) {
            span_contagem.innerHTML += cc + '\u{1F449}'
        }
        span_contagem.innerHTML += '\u{1F3C1}'
    }
}