function Converte(){
    var aux1 = new Array(8);
    aux1[0] = 1
    aux1[1] = 2
    aux1[2] = 4
    aux1[3] = 8
    aux1[4] = 16
    aux1[5] = 32
    aux1[6] = 64
    aux1[7] = 128
    
    var numeroB = document.getElementById('binario').value;
    var qtd = numeroB.length;

    var ArrBin = new Array(qtd);
    j = 0
    for(i = qtd-1; i >= 0; i--){
        ArrBin[j] = numeroB.substring(i,i+1);
        j++;
    } 
    var valor = 0;
    for(i = 0; i< qtd; i++){
        if(ArrBin[i] > 0){
            valor += aux1[i]
        }
    }
    alert(valor);
}