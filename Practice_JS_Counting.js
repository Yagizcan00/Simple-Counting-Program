let value = localStorage.getItem("value") ? Number(localStorage.getItem("value")) : 0

let current_number = document.getElementById("current_number")
current_number.innerHTML = value

let increasing = document.getElementById("increase")
increasing.addEventListener("click",counting)

let decreasing = document.getElementById("decrease")
decreasing.addEventListener("click",counting)

function counting() {
    if(this.id == "increase"){
        value += 1
        current_number.innerHTML = value
        localStorage.setItem("value",value)
    }
    else if(this.id == "decrease"){
        value-= 1
        current_number.innerHTML = value
        localStorage.setItem("value",value)
    }
}