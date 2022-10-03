function ContaCorrente(){
    return(
        <div className='row'>
            <div className='column'>
                <div className='card'>
                    <h1>Conta Corrente</h1>
                    <p><strong>Nome do Cliente:</strong><input type='text' id='txtn'></input></p>
                    <p><strong>Deposito:</strong><input type='number' id='txtd'></input></p>
                    <p><strong>Saldo:</strong><input type='number' id='txts'></input></p>
                    <p><input type='button' value='atualizar' onClick={atualizar}></input></p>
                    <div id='res'></div>
                </div>
            </div>
        </div>
    )
}
function atualizar() {

    let n = document.getElementById('txtn')
    let d = document.getElementById('txtd')
    let s = document.getElementById('txts')
    let dnum = parseFloat(d.value)
    let snum = parseFloat(s.value)
    let res = document.getElementById('res')
    let tot = snum + dnum

    if (dnum == 0 || snum == 0 || n.value.length == 0) {
        window.alert('[erro] Volte e preencha os dados incompletos ou não cadastrados!')
        return;
    }
    if (window.confirm('Dados preenchidos corretamente!')) {
        res.innerHTML = `Depósito em nome de ${n.value} no valor de ${dnum} e o saldo atual é  ${tot}`
    }
}
export default ContaCorrente;