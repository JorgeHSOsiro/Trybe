window.onload = function () {
    let state = document.querySelector('#estado');
    let curriculo = document.querySelector('#content-curriculo');
    let btnSend = document.querySelector('#send');
    let btnClear = document.querySelector('#clear');

    let estadosBr = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    for (estados of estadosBr) {
        let opcao = document.createElement('option');
        opcao.innerHTML = estados;
        opcao.value = estados;
        state.appendChild(opcao);
    }

    btnSend.addEventListener('click', function (e) {
        e.preventDefault();
        validaNome()
        validaEmail()
        validaCpf()
        validaEnd()
        validaCidade()
        validaEstado()
        validaResumo()
        validaCargo()
        validaDescCargo()
        validaData()
    });

    btnClear.addEventListener('click', function() {
        preventDefault();
    })

    function validaNome() {
        let nome = document.querySelector('#nome');
        if (nome.value !== '') {
            apresentaDados(nome.value);
        } else {
            alert('Digite seu nome!')
            nome.focus();
        }
    }

    function validaEmail() {
        let email = document.querySelector('#email');
        if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
            alert('Digite um email valido! não esqueça do @ e .');
            email.focus();
        } else {
            apresentaDados(email.value);
        }
    }

    function validaCpf() {
        let cpf = document.querySelector('#cpf');
        if (cpf.value == '') {
            alert('O campo deve ter numeros');
            cpf.focus();
        } else {
            apresentaDados(cpf.value);
        }
    }

    function validaEnd() {
        let end = document.querySelector('#end');
        if (end.value == '') {
            alert('O campo deve ter numeros');
            end.focus();
        } else {
            apresentaDados(end.value);
        }
    }

    function validaCidade() {
        let cidade = document.querySelector('#city');
        if (cidade.value == '') {
            alert('O campo deve ter numeros');
            cidade.focus();
        } else {
            apresentaDados(cidade.value);
        }
    }

    function validaEstado() {
        let state = document.querySelector('#estado');
        if (state.value == 'selecione') {
            alert('Escolha um Estado');
            state.focus();
        } else {
            apresentaDados(state.value);
        }
    }

    function validaResumo() {
        let resumo = document.querySelector('#resumo');
        if (resumo.value == '') {
            alert('Queremos te conhecer mais');
            resumo.focus();
        } else {
            apresentaDados(resumo.value);
        }
    }

    function validaCargo() {
        let cargo = document.querySelector('#cargo');
        if (cargo.value == '') {
            alert('Digite um cargo');
            cargo.focus();
        } else {
            apresentaDados(cargo.value);
        }
    }
    function validaDescCargo() {
        let cargoDesc = document.querySelector('#desc-cargo');
        if (cargoDesc.value == '') {
            alert('Descreva brevemente seu cargo');
            cargo.focus();
        } else {
            apresentaDados(cargoDesc.value);
        }
    }

    function validaData() {
        let data = document.querySelector('#data');
        let dia = data.value.substr(0, 2);
        let mes = data.value.substr(3, 2);
        let ano = data.value.substr(6, 4);
        if (data.value !== '' || ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano.length === 4 && ano >= 0))) {
          
            apresentaDados(data.value);
        } else {
            alert('o formato da data é 00/00/0000');
            data.focus(); 
        }
    }

    function apresentaDados(element) {
        let dado = document.createElement('p');
        dado.innerHTML = element;
        curriculo.appendChild(dado);
    }
}