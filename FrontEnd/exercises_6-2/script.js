window.onload = function() {
    
    let state = document.querySelector('#estado');
    let estadosBr = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    for (estados of estadosBr) {
        let opcao = document.createElement('option');
        opcao.innerHTML = estados;
        opcao.value = estados;
        state.appendChild(opcao);
    }
    
}