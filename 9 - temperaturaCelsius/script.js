function calculate(){
    var fahrenheit=document.getElementById("valorFahrenheit").value
       var text= (fahrenheit - 32) * 5 / 9
       var arredondado = parseFloat(text.toFixed(2));
    document.getElementById("texto_area").innerText=("O valor em Celsius: " + arredondado)

}