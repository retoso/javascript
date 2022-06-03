function calculate(){
    var altura=document.getElementById("valorAltura").value
       var text= altura * 72.7 - 58
       var arredondado = parseFloat(text.toFixed(2));
    document.getElementById("texto_area").innerText=("Seu peso ideal e : " + arredondado)
}



