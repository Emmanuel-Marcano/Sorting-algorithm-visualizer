
var slider = document.getElementById("range-slider__range");
var output = document.getElementById("range-slider__value");

output.innerHTML = slider.value;

// This function input current value in span and add progress colour in range
slider.oninput = function() {

  output.innerHTML = this.value;

  var value = (this.value-this.min)/(this.max-this.min)*100;
  
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #d7dcdf ' + value + '%, #d7dcdf 100%)'
}


// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++) {

//         let lowest = i

//         for(let j = i + 1; j < arr.length; j++) {

//             if(arr[j] < arr[lowest]){
//                 lowest = j  
//             }

//         }

//         let temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp

//     }
    
//     return arr
// }



let container = document.querySelector(".container")
let arrayInput = document.querySelector(".arrayInput")
let form = document.querySelector(".form")
let sortBtn = document.querySelector(".sort-btn")
let stepSort= document.querySelector(".step-sort-btn")
let stepSort2= document.querySelector(".step-sort-btn-2")


slider.addEventListener('change', function(e){
    if(container.firstElementChild){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
    }
    

    let input = slider.value
   
     let array = generateRandomizedArray(input)


      for(let i = 0; i < array.length; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        box.innerText = array[i]
        box.style.height = `${array[i]}px`
        container.append(box)
      }
})

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}



sortBtn.addEventListener("click", function(){
    let box = document.querySelectorAll(".box")
   
        for(let i = 1; i < box.length; i++){
           
            for(let j = 0; j < box.length - i; j++){
                if(j != 0 ){
                    box[j-1].style.backgroundColor = 'azure'
    
                }
                 box[j].style.backgroundColor = 'green'
                 box[j+1].style.backgroundColor = 'green'
               
                if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
                    let temp = box[j].innerText
                    box[j].innerText = box[j+1].innerText
                    box[j+1].innerText = temp
                    box[j].style.height = `${box[j].innerText}px`
                    box[j+1].style.height = `${box[j+1].innerText}px`
            }
        }
    }
})

let z = 1
stepSort.addEventListener("click", function(){
    let box = document.querySelectorAll(".box")
    if(z > 1){
        z++
    }
    
            for(let j = 0; j < box.length - z; j++){
                console.log("i = ", z)
                console.log("j = ", j)
                
                if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
                    let temp = box[j].innerText
                    box[j].innerText = box[j+1].innerText
                    box[j+1].innerText = temp
                    box[j].style.height = `${box[j].innerText}px`
                    box[j+1].style.height = `${box[j+1].innerText}px`
            }
        }
})

let i = 1;
let j = 0;
let iteration = 1

stepSort2.addEventListener("click", function(){
    let box = document.querySelectorAll(".box")

    while( i < box.length * box.length){
        console.log("outer = ",i)
           
        while( j < box.length - iteration ){

            console.log("inner = ",j)

            if(j != 0 ){
                box[j-1].style.backgroundColor = 'azure'
            }

             box[j].style.backgroundColor = 'green'
             box[j+1].style.backgroundColor = 'green'
            
           
            if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
                let temp = box[j].innerText
                box[j].innerText = box[j+1].innerText
                box[j+1].innerText = temp
                box[j].style.height = `${box[j].innerText}px`
                box[j+1].style.height = `${box[j+1].innerText}px`
            }

            j++
            if(j == box.length - iteration ){
                j=0
                iteration++
            }
            break;
        }
      
        i++
        break;
}



})




// box[j].style.backgroundColor = 'green'
            // box[j+1].style.backgroundColor = 'green' parseInt(box[j].innerText) > parseInt(box[j+1].innerText)









    // for(let i = 0; i < arrayInput.value; i++){


    //     for(let j = 0; j < arrayInput.value; j++){

    //         box.style.backgroundColor = 'green' 
    //         box.nextSibling.style.backgroundColor = 'green'



    //         if( box.innerText > box.nextSibling.innerText ){
    //             let temp = box.innerText;
    //             box.innerText =  box.nextSibling.innerText;
    //             box.nextSibling.innerText = temp
    //             box.style.height = `${box.innerText}px`
    //             box.nextElementSibling.style.height = `${box.nextSibling.innerText}px`
    //         }
    //     }
    // }










function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



function generateRandomizedArray(length){
    let array = []
    for(let i = 0; i < length; i++){
        array[i] = getRandomInt(100)
    }
    return array
  }

  





