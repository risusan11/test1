const Texta = document.getElementById("bo")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
let costcolor = 'red';

button2.addEventListener('click', () => Texta.style.color = costcolor )

button2.addEventListener('click', () => whatColor())

function whatColor(){
    if (costcolor === 'red') {
    costcolor = 'black'
    button2.innerHTML = '黒にする'
    
} else {
    costcolor = 'red'
    button2.innerHTML = '赤にする'
    
}

}


button1.addEventListener('click', () => Texta.innerHTML = "こんにちは")
