

function generateRandomColor(){
    var letters = "0123456789ABCDEF"

    console.log("#" + letters[0])

    var color = "#";
    for(var i =1; i <= 6; i++){
        color =  color + letters[Math.floor(Math.random() * 16)]


    }

    document.getElementById('colorDisplay').textContent = color
    document.body.style.backgroundColor=color
}