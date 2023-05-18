let btns = document.querySelectorAll("button")

btns.forEach(b =>{
    b.addEventListener("click" , btnClick)
})

function btnClick(){
    document.querySelector("#p_output").textContent += this.textContent
}

let ac = document.querySelector("#reset")
ac.removeEventListener("click" , btnClick);
ac.addEventListener("click" , acClick);

function acClick(){
    document.querySelector("#p_output").textContent = "";
}

let equal = document.querySelector("#equal")
equal.removeEventListener("click" , btnClick);
equal.addEventListener("click" , equalClick);

function equalClick(){
    let valEL = document.querySelector("#p_output")
    valEL.textContent = eval(valEL.textContent) 
}