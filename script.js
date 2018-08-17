let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let cards = ["crazy", "crazy2", "celtic", "celtic2", "diamond", "diamond2"]
let randomCards = cards.sort(e => { return 0.5 - Math.random() })
one.classList.add(randomCards[0])
two.classList.add(randomCards[1])
three.classList.add(randomCards[2])
four.classList.add(randomCards[3])
five.classList.add(randomCards[4])
six.classList.add(randomCards[5])

let crazy = document.querySelector(".crazy")
let diamond = document.querySelector(".diamond")
let celtic = document.querySelector(".celtic")
let crazy2 = document.querySelector(".crazy2")
let diamond2 = document.querySelector(".diamond2")
let celtic2 = document.querySelector(".celtic2")
let container = document.querySelector(".container")
let matchButton = document.querySelector(".button")
let counter = 1
let moveButton = document.querySelector(".button2")
let cards2 = document.querySelectorAll(".card")
let doneButton=document.querySelector(".button3")


let crazy1pic = false
crazy.addEventListener("click", e => {
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    if (crazy1pic == true) {
        crazy.innerHTML = `<p><p>`
        crazy1pic = false
        
    }
    else {
        crazy.innerHTML = `<img id="crazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Turtle_Graphics_Spiral.svg/220px-Turtle_Graphics_Spiral.svg.png" height="50">`
        crazy1pic = true
       
    }
        if(counter%2==1){
        checkMatch()
    }
})

let crazy2pic = false
crazy2.addEventListener("click", e => {
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    if (crazy2pic == true) {
        crazy2.innerHTML = `<p><p>`
        crazy2pic = false
       
    }
    else {
        crazy2.innerHTML = `<img id="crazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Turtle_Graphics_Spiral.svg/220px-Turtle_Graphics_Spiral.svg.png" height="50">`
        crazy2pic = true
       
    }
        if(counter%2==1){
        checkMatch()
    }
})

let celtic1pic = false
celtic.addEventListener("click", e => {
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    if (celtic1pic == true) {
        celtic.innerHTML = `<p><p>`
        celtic1pic = false
        

    }
    else {
        celtic.innerHTML = `<img id="celtic" src="http://www.stpeterslakewood.org/wp/wp-content/uploads/2016/05/celtic-trinity-knot.png" height="50">`
        celtic1pic = true
        
    }
        if(counter%2==1){
        checkMatch()
    }
})


let celtic2pic = false
celtic2.addEventListener("click", e => {
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    if (celtic2pic == true) {
        celtic2.innerHTML = `<p><p>`
        celtic2pic = false
        

    }
    else {
        celtic2.innerHTML = `<img id="celtic" src="http://www.stpeterslakewood.org/wp/wp-content/uploads/2016/05/celtic-trinity-knot.png" height="50">`
        celtic2pic = true
        
    }
        if(counter%2==1){
        checkMatch()
    }
})

let diamond1pic = false
diamond.addEventListener("click", e => {
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    if (diamond1pic == true) {
        diamond.innerHTML = `<p><p>`
        diamond1pic = false
       
    }
    else {
       
        diamond.innerHTML = `<img id="diamond" src="https://png2.kisspng.com/20180218/peq/kisspng-euclidean-vector-gemstone-mineral-diamond-shape-colorful-diamond-crystal-diamond-elemental-vector-5a8974dae7f9f9.9280556015189577869502.png" height="50">`
        diamond1pic = true
        
    }
        if(counter%2==1){
        checkMatch()
    }

})



let diamond2pic = false
diamond2.addEventListener("click", e => {
    
    moveButton.innerHTML = `"MOVES:${counter}"`
    counter += 1
    
    if (diamond2pic == true) {
        diamond2.innerHTML = `<p><p>`
        diamond2pic = false
    }
   
    else {
        diamond2.innerHTML = `<img id="diamond" src="https://png2.kisspng.com/20180218/peq/kisspng-euclidean-vector-gemstone-mineral-diamond-shape-colorful-diamond-crystal-diamond-elemental-vector-5a8974dae7f9f9.9280556015189577869502.png" height="50">`
        diamond2pic = true

        
    }
    
      if(counter%2==1){
        checkMatch()
    }
})


function checkMatch() {
    if (diamond1pic && diamond2pic) {
        matchButton.innerHTML = "YOU GOT DIAMOND MATCH!"
        diamond.classList.add("hidden")
        diamond2.classList.add("hidden")
        diamond1pic=false
        diamond2pic=false
        
    }
    
   else if (celtic1pic && celtic2pic) {
        matchButton.innerHTML = "YOU GOT CELTICS MATCH!"
        celtic.classList.add("hidden")
        celtic2.classList.add("hidden")
        celtic1pic=false
        celtic2pic=false
    }
   else if (crazy1pic && crazy2pic) {
        matchButton.innerHTML = "YOU GOT CRAZY MATCH!"
        crazy.classList.add("hidden")
        crazy2.classList.add("hidden")
        crazy1pic=false
        crazy2pic=false
    }
    else{
      flip()
    }
}

function flip(){
    console.log(cards2)
 setTimeout(function(){
     cards2.forEach(card => {
     card.innerHTML=`<p></p>`
     })
 },1000)
 
    

crazy1pic=false
crazy2pic=false
celtic1pic=false
celtic2pic=false
diamond1pic=false
diamond2pic=false

}



doneButton.addEventListener("click", e => {
    alert("CONGRADULATIONS! Reload page to play again!")
})
