
var slider = document.getElementById("range-slider__range");
var output = document.getElementById("range-slider__value");
let speedSliderOutput = document.querySelector(".speed-slider-value")
let speedSlider = document.querySelector(".speed-slider")

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






let container = document.querySelector(".container")
let bubbleSortBtn = document.querySelector(".bubble-sort-btn")
let selectionSortBtn = document.querySelector(".selection-sort-btn")

let stepSort2= document.querySelector(".step-sort-btn-2")
let stopExec = false


/*****    declares values for the selection sort btn */  
let iteration = 0
let lowest;


slider.addEventListener('change', function(e){
    if(container.firstChild){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
    }


    // ************** Stops the setInterval from executing and intializes values for the selection sort  ******************** //
    iteration = 0
    i = 0
    j = iteration + 1
    lowest = iteration

    stopExec = true

    // **************  Stops the setInterval from executing ******************** //
    

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



bubbleSortBtn.addEventListener("click", function(){

//  ********* Select and retrieve all of the currently available box nodes ******
    let box = document.querySelectorAll(".box")
    let currentBoxLength = box.length * (box.length/2)
    stopExec = false
    iteration = 1
    i = 0
    j = 0

    let myfunc = setInterval(function(){

        while( i < currentBoxLength){
            console.log("outer = ",i)
               
            while( j < box.length - iteration ){
    
                console.log("inner = ",j)
    
                if(j != 0 ){
                    box[j-1].style.backgroundColor = 'azure'
                }
    
                 box[j].style.backgroundColor = '#2EE59D'
                 box[j+1].style.backgroundColor = '#2EE59D'
                
               
                if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
                    let temp = box[j].innerText
                    box[j].innerText = box[j+1].innerText
                    box[j+1].innerText = temp
                    box[j].style.height = `${box[j].innerText}px`
                    box[j+1].style.height = `${box[j+1].innerText}px`
                    // box[j].style.backgroundColor = 'red'
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

    // **** if the current loop reached its end or if stop executing is true then
    // stop the interval 

    if(i === currentBoxLength || stopExec){
        clearInterval(myfunc)
    }
    

    },speedSlider.value)

})

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


selectionSortBtn.addEventListener("click", function(){

    let box = document.querySelectorAll(".box")
    let currentBoxLength = box.length * box.length
    stopExec = false
    iteration = 0
    i = 0
    j = iteration + 1
    lowest = iteration

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

                if(j === box.length ){

                    console.log(`lowest found = ${box[lowest].innerText}`)

                    let temp = box[iteration].innerText
                    box[iteration].innerText = box[lowest].innerText
                    box[lowest].innerText = temp
                    box[iteration].style.height = `${box[iteration].innerText}px`
                    box[lowest].style.height = `${box[lowest].innerText}px`
                    box[lowest].style.backgroundColor = 'red'

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

    if(i === currentBoxLength || stopExec){
        clearInterval(myfunc)
    }
    

    },speedSlider.value)


})





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

