
var data = [
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ"
]


function generatorQuoteFun(){

    var randomIndex = Math.floor(Math.random() * data.length)
   document.getElementById("quoteDisplay").textContent= data[randomIndex]

}