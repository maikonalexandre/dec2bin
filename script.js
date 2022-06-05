const res = document.getElementById('rese');
const na = document.getElementById('nam');
const b = document.getElementById('by');

console.log(b);

res.addEventListener('click', resetar);

function resetar() {
    document.getElementById('nam').value = "";
    document.getElementById('by').value = "";
}
na.addEventListener('keydown', (dec) => {
    const na = document.getElementById('nam').value;

    if (dec.which == 13) {
        if (na == '') {
            document.getElementById('by').value = "Número não identificado";
        } else {
            const n = parseInt(na).toString(2);
            document.getElementById('by').value = "" + n;
        }
    } else if (dec.which == 8) {
        document.getElementById('by').value = "...";
    }
});




b.addEventListener('keydown', (dec) => {
    const b = document.getElementById('by').value;
    const x = parseInt(b, 2);

    if (dec.which == 13) {
        if (b == '') {
            document.getElementById('nam').value = "Número não identificado";
        } else {
            document.getElementById('nam').value = "" + x;
        }

    } else if (dec.which == 8) {
        document.getElementById('nam').value = "...";
    }
});



by.addEventListener('keypress', function (key) {

    const tecla = (key.tecla ? key.tecla : key.which);
    console.log(tecla);
    if (tecla > 49 && tecla < 58) {
        key.preventDefault();

    }



});

na.addEventListener('click', limpar);

function limpar() {
    document.getElementById('by').value = "...";
    document.getElementById('nam').value = "";
}


by.addEventListener('click', limp);

function limp() {
    document.getElementById('nam').value = "...";
    document.getElementById('by').value = "";
}
//function decimal (){
//const na = parseInt(document.getElementById('nam').value);
//ParseInt converte o parametro string vindo do input para imteiro 
//const b = parseInt(document.getElementById ('by').value);
//c= na+b;
//window.alert(''+c);
//  }
//su.addEventListener('click',decimal);
//toString transformando o número em binário.