$(document).ready(function(){
    $('#CPF').mask('000.000.000-00');

    $('#CEP').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CEP: {
                required: true
            },
            CPF: {
                required: true
            },
            endereço: { 
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu número',
            CPF: 'Por favor, insira seu CPF',
            CEP: 'Por favor, insira seu CEP',
            endereço: 'Por favor, insira seu endereço'
        }
    })
})