let number = parseInt(prompt("Informe um número: "))
let cubo = number * number * number

document.write("Hello, world! <br> The number " + number +  " elevated by 3 is: " + cubo)

let farenheit = parseFloat(prompt("Qual a temperatura °F?"))
let convertFarenheit = (farenheit - 32) * 0.5556

document.write("<br><br>O grau " + farenheit + " °F em celsius é: " + convertFarenheit.toFixed(2) + "°C")

let baseTriangulo = parseInt(prompt("Qual o valor da base do triângulo?"))
let alturaTriangulo = parseInt(prompt("Qual a altura do triângulo?"))
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

document.write("<br><br>A área do triângulo é: " + areaTriangulo.toFixed(2))

const pi = 3.14
let raioCirculo = parseInt(prompt("Qual o raio do círculo?"))
let areaCirculo = pi * raioCirculo * raioCirculo
let perimetroCirculo = 2 * pi * raioCirculo

document.write("<br><br>A área do círculo é: " + areaCirculo.toFixed(2) + "<br>O perímetro do círculo é: " + perimetroCirculo.toFixed(2))
