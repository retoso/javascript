function calculate(){
    var celsius=document.getElementById("valorCelsius").value
       var text= celsius * 9/5 + 32
       var arredondado = parseFloat(text.toFixed(2));
    document.getElementById("texto_area").innerText=("Fahrenheit: " + arredondado)

}