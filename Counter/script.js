


var counterElement = document.getElementById("counter");
var incrementElement = document.getElementById("increment");
var decrementElement = document.getElementById("decrement");


var counterValue = 0;

// function updateCounter(){
//     counterElement.textContent=counterValue
// }

incrementElement.addEventListener("click", function(){
    counterValue = counterValue + 1;
    console.log(typeof(counterElement.textContent));
    counterElement.textContent=counterValue
})

decrementElement.addEventListener("click", function(){
    if(counterValue>0){
        counterValue = counterValue - 1;
        counterElement.textContent=counterValue
    }
   
})