
var slider = document.getElementById("range-slider__range");
var output = document.getElementById("range-slider__value");
let speedSliderOutput = document.querySelector(".speed-slider-value")
let speedSlider = document.querySelector(".speed-slider")
let container = document.querySelector(".container")
let bubbleSortBtn = document.querySelector(".bubble-sort-btn")
let selectionSortBtn = document.querySelector(".selection-sort-btn")
let insertionSortBtn = document.querySelector(".insertion-sort-btn")
let stopIntervalExecution = false

// output.innerHTML = slider.value;

// This function input current value in span and add progress colour in range
slider.oninput = function() {
  output.innerHTML = this.value;
  var value = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #d7dcdf ' + value + '%, #d7dcdf 100%)'

}

speedSlider.oninput = function() {
  speedSliderOutput.innerHTML = `${this.value}ms`;
  var value = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #d7dcdf ' + value + '%, #d7dcdf 100%)'

}


slider.addEventListener('input', function(){

    if(container.firstChild){
        removeAllBoxes()
    }
    
    // ************** Stops the setInterval from executing  ******************** //
    
    stopIntervalExecution = true

    // **************  Stops the setInterval from executing ******************** //
    
    let input = slider.value
    let array = generateRandomizedArray(input)
     
    // console.log(array)
    // console.log(insertionSort(array))


    createBoxes(array)
})

// 



bubbleSortBtn.addEventListener("click", function(){

//  ********* Select and retrieve all of the currently available box nodes ******
    let box = document.querySelectorAll(".box")
    let currentBoxLength = box.length * (box.length/2)
    stopIntervalExecution = false

    iteration = 1
    i = 0
    j = 0

    let myfunc = setInterval(function(){

        // removeAllBoxes()

        // createHtmlCollec(box)

        // box[j].style.left = `0px`
        // box[j+1].style.left = `0px`

        while( i < currentBoxLength){
            // console.log("outer = ",i)
           
               
            while( j < box.length - iteration ){
    
                // console.log("inner = ",j)
              
    
                if(j != 0 ){
                    box[j-1].style.backgroundColor = 'azure'
                }
    
                 box[j].style.backgroundColor = '#2EE59D'
                 box[j+1].style.backgroundColor = '#2EE59D'
                
               
                if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){

                    // console.log(`before switch ${box}`)
                    // box[j].style.transform = `translateX(${box[j+1].getBoundingClientRect().left - box[j].getBoundingClientRect().left }px)`
                    // box[j+1].style.transform = `translateX(${box[j].getBoundingClientRect().left - box[j+1].getBoundingClientRect().left }px)`


                    let temp = box[j].innerText

                   

                    // box[j].style.left = `${box[j+1].getBoundingClientRect().left - box[j].getBoundingClientRect().left }px`
                    // box[j+1].style.left = `${box[j].getBoundingClientRect().left - box[j+1].getBoundingClientRect().left }px`

             



                    // let temp = box[j] 
                    // box[j] = box[j].nextSibling
                    // box[j].nextSibling = temp

                    // console.log(`after switch ${box}`)




                    box[j].innerText = box[j+1].innerText
                    box[j+1].innerText = temp
                    box[j].style.height = `${box[j].innerText}px`
                    box[j+1].style.height = `${box[j+1].innerText}px`
                    box[j].style.backgroundColor = 'red'
                }
    
                j++
                if(j == box.length - iteration ){
                    j = 0
                    iteration++



                }
                break;
            }
          
            i++
            break;
    }

    // **** if the current loop reached its end or if stop executing is true then
    // stop the interval 

    if(i === currentBoxLength || stopIntervalExecution){
        clearInterval(myfunc)
    }
    

    },speedSlider.value)

})




selectionSortBtn.addEventListener("click", function(){

    let box = document.querySelectorAll(".box")
    let currentBoxLength =  box.length * ( box.length / 2 )
    stopIntervalExecution = false
    let iteration = 0
    let i = 0
    let j = iteration + 1
    let lowest = iteration

    let myfunc = setInterval(function(){

        while( i < currentBoxLength){
            console.log("iteration = ", iteration)
            console.log("outer i = ",i)
           
            while( j < box.length ){

                console.log("inner j = ",j)

                if(parseInt(box[j].innerText) < parseInt(box[lowest].innerText)){
                    lowest = j
                }
             
                j++

                if(j === box.length) {

                    console.log(`lowest found = ${box[lowest].innerText}`)

                    let temp = box[iteration].innerText
                    box[iteration].innerText = box[lowest].innerText
                    box[lowest].innerText = temp
                    box[iteration].style.height = `${box[iteration].innerText}px`
                    box[lowest].style.height = `${box[lowest].innerText}px`
                    
                    
                    box[iteration].style.backgroundColor = '#2EE59D'

                    iteration++
                    lowest = iteration
                    j = iteration + 1
                   
                }

                break;
            }
            i++
            break;
    }

    // **** if the current loop reached its end or if stop executing is true then
    // stop the interval 

    if(i === currentBoxLength || stopIntervalExecution){
        clearInterval(myfunc)
    }
    
    },speedSlider.value)
})

function insertionSort(arr){

    for(var i = 1; i < arr.length; i++){
    let currentVal = arr[i]

      for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j+1] = arr[j]
        console.log("in insertion")
      }

      arr[j+1] = currentVal

    }

    return arr

}

[70, 81, 90, 100]



insertionSortBtn.addEventListener("click", function(){

    let box = document.querySelectorAll(".box")
    let currentBoxLength =  box.length * ( box.length / 2 )
    stopIntervalExecution = false
    let iteration = 1
    let i = 0
    let j = iteration - 1
    let currentVal = parseInt(box[iteration].innerText)
    let hasNotEntered = true
   

    let myfunc = setInterval(function(){

        while( i < currentBoxLength ){

            hasNotEntered = true
          
            while(j >= 0 && parseInt(box[j].innerText) > currentVal){

                hasNotEntered = false

                box[j+1].innerText = box[j].innerText

                j--
                
                if(j < 0) {
                
                    if(iteration < box.length - 1  ){
                       iteration++
                    }

                    box[j+1].innerText = currentVal
                    box[j+1].style.height =   `${box[j+1].innerText}px`
                    currentVal = parseInt(box[iteration].innerText)
                    j = iteration - 1
                } 
              
                break;

            }

             if(hasNotEntered) {

                if(iteration < box.length - 1 ) {
                    iteration++
                }

                box[j+1].innerText = currentVal
                box[j+1].style.height =   `${box[j+1].innerText}px`
                currentVal = parseInt(box[iteration].innerText)
                j = iteration - 1
             }
               
            i++
            break;
    }

    if(i === currentBoxLength || stopIntervalExecution){
        clearInterval(myfunc)
    }
    
    },speedSlider.value)

})







/*

let stepSort2= document.querySelector(".step-sort-btn-2")
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++) {

        let lowest = i

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[lowest]){
                lowest = j  
            }

        }

        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp

    }
    
    return arr
}

*/



// stepSort2.addEventListener("click", function(){
//     let box = document.querySelectorAll(".box")

//     while( i < box.length * (box.length/2)){
//         console.log("outer = ",i)
           
//         while( j < box.length - iteration ){

//             console.log("inner = ",j)

//             if(j != 0 ){
//                 box[j-1].style.backgroundColor = 'azure'
//             }

//              box[j].style.backgroundColor = 'green'
//              box[j+1].style.backgroundColor = 'green'
            
           
//             if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
//                 let temp = box[j].innerText
//                 box[j].innerText = box[j+1].innerText
//                 box[j+1].innerText = temp
//                 box[j].style.height = `${box[j].innerText}px`
//                 box[j+1].style.height = `${box[j+1].innerText}px`
//                 // box[j].style.backgroundColor = 'red'
//             }

//             j++
//             if(j == box.length - iteration ){
//                 j=0
//                 iteration++
//             }
//             break;
//         }
      
//         i++
//         break;
// }



// })


// function bubbleSort(arr) {
//         for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length; j++){
//                 if(arr[j] > arr[j+1]){
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp
//                 }
//             }
//         }
//         return arr
//     }



function removeAllBoxes(){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
}

function createBoxes(array){
    for(let i = 0; i < array.length; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        box.innerText = array[i]
        box.style.height = `${array[i]}px`
        container.append(box)
      }
}

function createHtmlCollec(array){
    for(let i = 0; i < array.length; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        box.innerText = array[i].innerText
        box.style.height = `${array[i].innerText}px`
        container.append(box)
      }
}



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

  

/* **************** Bubble sorts the entire array in one go ****************/


    // let box = document.querySelectorAll(".box")
    // for(let i = 1; i < box.length; i++){
           
    //         for(let j = 0; j < box.length - i; j++){
    //             if(j != 0 ){
    //                 box[j-1].style.backgroundColor = 'azure'
    
    //             }
    //              box[j].style.backgroundColor = 'green'
    //              box[j+1].style.backgroundColor = 'green'
               
    //             if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
    //                 let temp = box[j].innerText
    //                 box[j].innerText = box[j+1].innerText
    //                 box[j+1].innerText = temp
    //                 box[j].style.height = `${box[j].innerText}px`
    //                 box[j+1].style.height = `${box[j+1].innerText}px`
    //         }
    //     }
    // }

