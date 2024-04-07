let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(Element  =>{
    Element.addEventListener("click",(e)=>{
        console.log(e.target.textContent)
    })
    if(e.target.textContent === "C"){
        input.innerText ="";
    }
    else if(e.target.textContent === "c"){
        input.innerText = input.innerText, slice(0,-1);
    }
    else{
        input.innerText +=e.target;
        textContentl
        }
})