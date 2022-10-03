function CadastroCliente(){
    return(
            <div class = "row">
            <div class="column">
                <div class="card">
                    <h1>Pagina de Cadastro do Cliente</h1>
                    <p><strong>Nome:</strong><input type="text" name="Nome" id="txte"></input></p>
                    <p><strong>Endereço:</strong><input type="text" name="Endereço" id="txte"></input></p>
                    <p><strong>CPF:</strong><input type="number" name="CPF" id="txte"></input></p>
                    <p><input type="button" value="cadastro" onClick={cadastro}></input></p>
                    <div id="r"></div>
                </div>
            </div>
        </div>
    ) 
}
function cadastro(){
    let n = document.getElementById("txtn")
    let e = document.getElementById("txtn")
    let c = document.getElementById("txtn")
    let r = document.getElementById("r")
    if(n.value.length == 0 || e.value.length == 0 || c.value.length == 0){
        window.alert("Ainda faltam dados a serem preenchidos!")
        return;
    }
    if(window.confirm("Dados preenchidos corretamente!")){
        r.innerHTML = " O cadastro foi efetuado com sucesso em ${n.value}, ${e.value} e ${c.value}"
    }
}
export default CadastroCliente;