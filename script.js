function gerar() {
    var numeroBase = document.getElementById('txtnumero');
    var res =  document.getElementById('resultado');


    //Resolução 1

    if (numeroBase.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(numeroBase.value)
        res.innerHTML = ``
        for (let c = 1; c <= 10; c++){
            var option = document.createElement('option');
            res.appendChild(option).innerHTML += `${n} x ${c} = ${n*c}<br>`;
        }

    } 
}   

/*
    //Resolução 2
    if (numeroBase.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(numeroBase.value);
        let c = 1
        res.innerHTML = '';
        while (c <= 10){
            var option = document.createElement('option');
            res.appendChild(option).innerHTML += `${n} x ${c} = ${n*c}<br>`;
            c++
        }
    }
}

*/