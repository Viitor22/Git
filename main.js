const form = document.getElementById('form');
const containerMensagemSucesso = document.querySelector('.sucess-message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valorA = document.getElementById('ValorA');
    const valorB = document.getElementById('ValorB');
    const menssagemSucesso = 'O número ' + (valorB.value) +' é maior que ' + (valorA.value);
    if(valorB.value >= valorA.value){
        valorA.classList.remove('error');
        valorB.classList.remove('error');

        containerMensagemSucesso.innerHTML = menssagemSucesso;
        document.querySelector('.error-message').style.display='none';
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorA.classList.add('error');
        valorB.classList.add('error');
        containerMensagemSucesso.style.display = 'none';
        document.querySelector('.error-message').style.display='block';
    }
})