let newForm= document.querySelector("form")
let text = document.querySelector("input")
let myContainer = document.querySelector(".container")


newForm.addEventListener("submit", function(event){
    event.preventDefault();
    let toDo = event.target['todo'].value;
    let newP = document.createElement("p");
    newP.innerText = toDo;
    let mySpan = document.createElement("span");
    mySpan.innerText = "X";
    newP.appendChild(mySpan)
    myContainer.appendChild(newP)
    mySpan.addEventListener("click", function(){
        this.parentElement.remove();
    })
    newForm.reset();
})


