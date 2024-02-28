    function calcular(){

        var inputNumero = document.getElementById('inputNumero')
        var res = document.getElementById('res')

        var n = Number(inputNumero.value)


        res.innerHTML = ''//limpa o conteúdo anterior para que não acumule na tela(reseta o código)

        var c = 1

        while (c <= 10){
           
         var x = n * c

         res.innerHTML += `${n} x ${c} = ${x}<br>`//esse += vai fazer os elementos irem se infileirando em coluna ao mesmo tempo, 
         //se não tivesse ia aparecer somento o ultimo (ex: 1x10 =10). o <br> serve para por os elementos um abaixo do outro
        
         c++
         }
        

        /*se fosse usando o for:

        for(var c = 1; c <= 10; c++){
            var x = n * c
            res.innerHTML += `${n} x ${c} = ${x}<br>`
        }*/
    
        if(n == 0){
            window.alert(`Sem número digitado. Será considerado como '0'(zero)` )
            n = 0
        }
    }