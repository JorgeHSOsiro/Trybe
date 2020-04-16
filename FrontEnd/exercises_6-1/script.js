window.onload = function () {
    let state = document.querySelector('#estado');
    let curriculo = document.querySelector('#content-curriculo');
    let btnSend = document.querySelector('#send');


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
    });

    function validaNome() {
        let nome = document.querySelector('#nome');
        if (nome.value !== '') {
            console.log(nome.value);     
        }else {
            alert('Digite seu nome!')
            nome.focus();
        }
    }

    function validaEmail() {
        let email = document.querySelector('#email');
        if (email.value == '' ||email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
            alert('Digite um email valido! não esqueça do @ e .');
            email.focus();
        }else {
            console.log(email.value);
        }
    }

    function validaCpf() {
        let cpf = document.querySelector('#cpf');
        if (cpf.value == '' ) {
            alert('O campo deve ter numeros');
            cpf.focus();
        } else {
            console.log(cpf.value);
        }
    }

    function validaEnd() {
        let end = document.querySelector('#end');
        if (end.value == '' ) {
            alert('O campo deve ter numeros');
            end.focus();
        } else {
            console.log(end.value);
        }
    }

    function validaCidade() {
        let cidade = document.querySelector('#city');
        if (cidade.value == '' ) {
            alert('O campo deve ter numeros');
            cidade.focus();
        } else {
            console.log(cidade.value);
        }
    }

    function validaEstado() {
        let state = document.querySelector('#estado');
        if (state.value == 'selecione' ) {
            alert('Escolha um Estado');
            state.focus();
        } else {
            console.log(state.value);
        }
    }

    function validaResumo() {
        let resumo = document.querySelector('#resumo');
        if (resumo.value == '' ) {
            alert('O campo deve ter numeros');
            resumo.focus();
        } else {
            console.log(resumo.value);
        }
    }
    
    function validaCargo() {
        let cargo = document.querySelector('#cargo');
        if (cargo.value == '' ) {
            alert('O campo deve ter numeros');
            cargo.focus();
        } else {
            console.log(cargo.value);
        }
    }
}



