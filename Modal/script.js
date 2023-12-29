

// var openModalBtn = document.getElementById("openModalBtn")
// var closeModalBtn = document.getElementById("closeModalBtn")
var myModal = document.getElementById("myModal")


// openModalBtn.addEventListener("click", function(){
//     myModal.style.display = "block"
// })

function openModalBtn(){
    myModal.style.display = "block"
}
function closeModalBtn(){
    myModal.style.display = "none"
}

closeModalBtn.addEventListener("click", function(e){
    console.log(e.target);
    myModal.style.display = "none"
})

window.addEventListener("click", function(e){
    // console.log(e.target);
  if(e.target=== myModal){
    myModal.style.display = "none"
  }
})