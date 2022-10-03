function CalculoFinanceiro() {
    return (
        <div class="row">
            <div class="column">
                <div class="card">
                    <h1>Simulação de Financiamento | BancoPW</h1>
                    <p><strong>Nome do Cliente:</strong><input type="text" name="Nome do Cliente"></input></p>
                    <p><strong>Valor Solicitado:</strong><input type="number" id="txtv"></input></p>
                    <p><strong>Parcelas:</strong><input type="number" id="txtp"></input></p>
                    <p><strong>Juros:</strong><input type="number" id="txtj"></input></p>
                    <p><input type="button" value="cadastrar" onClick={cadastrar}></input></p>
                    <div id="r"></div>
                </div>
            </div>
        </div>
    )
}
function cadastrar() {
    let v = document.getElementById("txtv");
    let vnum = parseFloat(v.value);
    let p = document.getElementById("txtp");
    let pnum = parseInt(p.value);
    let j = document.getElementById("txtj");
    let jnum;
    let tot;
    let vpar;
    let res = document.getElementById("res");
    if (isNaN(vnum) || vnum == 0.0 || isNaN(pnum) || pnum === 0.0) {
        window.alert("Volte e preencha os dados incompletos ou não cadastrados!")
        return;
    }
    if (window.confirm("Todos os dados foram preenchidos corretamente!")) {
        if(vnum <= 1500){
            jnum = 1.12;
        }
        if(vnum >= 1501 && vnum <= 4000){
            jnum = 1.17;
        }
        if(vnum >= 5001 && vnum <= 10000){
            jnum = 1.22;
        }
        if(vnum > 10001){
            jnum = 1.35;
        }
        j.value = jnum;
        tot = parseFloat (vnum*jnum).toFixed(2);
        vpar =parseFloat (tot / pnum).toFixed(2);
        res.innerHTML = "O valor do emprestimo foi de ${vnum} com juros de ${jnum} no valor total de ${tot}, cada parcela com o valor de ${vpar}, e o total de parcelar ${pnum}"
    }
}
export default CalculoFinanceiro;