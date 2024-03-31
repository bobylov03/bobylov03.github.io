// let myform= document.querySelector("button")
// let myBody = document.querySelector("body")
// myform.addEventListener("click", function(e){
//     e.preventDefault()
//     let colorInput = document.querySelector("#color")
//     let newColor = colorInput.value;
//     myBody.style.backgroundColor = newColor
//     window.localStorage.colorKey = newColor
// })

// let colorInput = document.querySelector("#color")
// console.log(colorInput);
// window.addEventListener( "reset" ,function(){
//     myBody.style.backgroundColor= window.localStorage.colorKey
// })

let but = document.querySelector("button")
but.addEventListener("click", function(){
    fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(json => {
        let myres = json.residentse
        console.log(json.name);



    })
    
})
