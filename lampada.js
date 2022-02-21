
function ligarDesliga(){

    var imagem = document.getElementById('lamp').src;
    var imagem_ligado = 'https://lh3.googleusercontent.com/2Uo0XYLYGmglXQb1aO8RWfIHbvKHWwXlDgh55gtNH7ET9UgMyRiCQAJg2JCQAlaP3VFQwdjDv3euExs=w893-h872';
    var imagem_desligado = 'https://lh3.googleusercontent.com/erfiY-ym8v9fPskflmDEDF7W3uBtB9XHtN0wqxC-bG11rzTYtP9TXK8WSu0CVvtZF2_7OCFkshmW6h4=w893-h872';
    
    if(imagem == imagem_ligado){
    	document.getElementById('lamp').src = imagem_desligado;
    }else{
    	document.getElementById('lamp').src = imagem_ligado;
    }
}
document.getElementById("ligarDesliga").addEventListener("click", ligarDesliga);