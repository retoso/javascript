function calculate(){
    var altura=document.getElementById("valorAltura").value
       var textH= altura * 72.7 - 58
       var arredondadoH = parseFloat(textH.toFixed(2));
       var textM= altura * 62.1 - 44.7
       var arredondadoM = parseFloat(textM.toFixed(2));
       document.getElementById("texto_area").innerText=("Peso ideal para homens e " + arredondadoH + " e para mulheres e " + arredondadoM)
}