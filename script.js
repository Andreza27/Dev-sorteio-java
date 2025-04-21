 


function geradordenumero(){

    const input01 = Math.ceil(document.querySelector('.input01').value)
    const input02 = Math.floor(document.querySelector('.input02').value)

    const resultado = Math.floor(Math.random() * (input01-input02 + 1)) + input02;

    alert(resultado)
}