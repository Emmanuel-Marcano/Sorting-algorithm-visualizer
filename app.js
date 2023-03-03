let tutorialTitle = document.querySelector(".tutorial-title")
let tutorialSecTitle = document.querySelector(".tutorial-sec-title")
let tutorialDescription = document.querySelector(".tutorial-description")
let tutorialDescription2 = document.querySelector(".tutorial-description-2")
let descriptionColumns = document.querySelector(".desc-columns")
let tutorialH31 = document.querySelector(".tutorial-h3")
let tutorialH32 = document.querySelector(".tutorial-h3-2")



let tutorialTimeComplex = document.querySelector(".time-complex")
let tutorialNextBtn = document.querySelector(".next-btn")
let tutorialPreviousBtn = document.querySelector(".previous-btn")
let countDisplay = document.querySelector(".page-count")
let PageCounter = 1
let numberOfPages = 5

let tutorialPageCounter = 0
countDisplay.innerText = `${PageCounter}/${numberOfPages}`

const tutorialInfo = [
    {
        title: "Welcome to Sorting Algorithm Visualizer!",
        secondaryTitle: "Desktop First",
        timeComplexity: "I made this app to be primarily a desktop experience. If you are currently on mobile, feel free to try it out but the user experience might not be as good. If you own a personal computer i'd recommend to try it out there!",
        tutorialH31: "Enjoy!",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, adipisci possimus.' ,
        tutorialH32: "Tutorial",
        description2: 'Next stop is a short tutorial. If you want to dive right in, press the "Skip Tutorial" button below. Otherwise press "Next" to continue with the tutorial.',
        image: "connection.png"
    },
    {
        title: "Welcome to Sorting Algorithm Visualizer!",
        secondaryTitle: "Short Tutorial",
        timeComplexity: "This tutorial will quickly walk you through the features of this algorithm visualizer and briefly give you an overview of the included algorithms.",
        tutorialH31: "The Big 3",
        description: "The sorting algorithm visualizer includes the 3 elemental sorting algorithms. They are commonly used and thrive at sorting lists that don't have too many elements. I will be explaining why soon. ",
        tutorialH32: "Set Up",
        description2: "To start, first select the amount of elements you want in the array by using the range input slider on the bottom left of the screen. Once you have selected an amount, you can select the speed at which you want the array to get sorted at with the bottom right slider. Finally, you can select which algorithm you want to run on the array with the buttons at the top of the screen.",
        image: "" 
    },
    {
        title: "Bubble Sort",
        secondaryTitle: "Time Complexity",
        timeComplexity: "O/N2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe sunt cumque id unde nesciunt itaque. Officiis, nihil enim quam voluptate vero laborum culpa non unde maiores omnis ad deleniti.",
        image: "connection.png" 
    },
    {
        title: "Selection Sort",
        secondaryTitle: "Time Complexity",
        timeComplexity: "O/N2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe sunt cumque id unde nesciunt itaque. Officiis, nihil enim quam voluptate vero laborum culpa non unde maiores omnis ad deleniti.",
        description2: "",
        image: "connection.png" 
    },
    {
        title: "Insertion Sort",
        secondaryTitle: "Time Complexity",
        timeComplexity: "O/N2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe sunt cumque id unde nesciunt itaque. Officiis, nihil enim quam voluptate vero laborum culpa non unde maiores omnis ad deleniti.",
        description2: "",
        image: "connection.png" 
    }
]





tutorialNextBtn.addEventListener("click", function(){
   
    
    // length = 4
    // length - 1 = 3
    //0
    // 1
    //2
    // 3
   
    if(tutorialPageCounter < tutorialInfo.length - 1){ 
    PageCounter++
    tutorialPageCounter++
    countDisplay.innerText = `${PageCounter}/${numberOfPages}`
    }

    // if(tutorialPageCounter === 1){
    //     descriptionColumns.classList.add("grid-columns")


    // }

    

   


    tutorialTitle.innerText = tutorialInfo[tutorialPageCounter].title
    tutorialSecTitle.innerText = tutorialInfo[tutorialPageCounter].secondaryTitle
    tutorialTimeComplex.innerText = tutorialInfo[tutorialPageCounter].timeComplexity
    tutorialH31.innerText = tutorialInfo[tutorialPageCounter].tutorialH31
    tutorialDescription.innerText = tutorialInfo[tutorialPageCounter].description
    tutorialH32.innerText = tutorialInfo[tutorialPageCounter].tutorialH32
    tutorialDescription2.innerText = tutorialInfo[tutorialPageCounter].description2

}


)

tutorialPreviousBtn.addEventListener("click", function(){

    
   
    if(tutorialPageCounter > 0 ){
        PageCounter--
        tutorialPageCounter--
        countDisplay.innerText = `${PageCounter}/${numberOfPages}`
        
        }

      


    tutorialTitle.innerText = tutorialInfo[tutorialPageCounter].title
    tutorialSecTitle.innerText = tutorialInfo[tutorialPageCounter].secondaryTitle
    tutorialTimeComplex.innerText = tutorialInfo[tutorialPageCounter].timeComplexity
    tutorialH31.innerText = tutorialInfo[tutorialPageCounter].tutorialH31
    tutorialDescription.innerText = tutorialInfo[tutorialPageCounter].description
    tutorialH32.innerText = tutorialInfo[tutorialPageCounter].tutorialH32
    tutorialDescription2.innerText = tutorialInfo[tutorialPageCounter].description2




})







let overlay = document.querySelector(".overlay")
let tutorial = document.querySelector(".tutorial")
let closeIntroBtn = document.querySelector(".intro-close-btn")
var slider = document.getElementById("range-slider__range");
var output = document.getElementById("range-slider__value");
let speedSliderOutput = document.querySelector(".speed-slider-value")
let speedSlider = document.querySelector(".speed-slider")
let boxContainer = document.querySelector(".boxContainer")
let bubbleSortBtn = document.querySelector(".bubble-sort-btn")
let selectionSortBtn = document.querySelector(".selection-sort-btn")
let insertionSortBtn = document.querySelector(".insertion-sort-btn")
let arrow = document.querySelector(".arrow")
let heightMultiplier = 5
let stopIntervalExecution = false

closeIntroBtn.addEventListener("click", function(){
    tutorial.classList.add("close-intro")
    overlay.classList.add("close-intro")
})

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

    arrow.classList.remove("show")

    if(boxContainer.firstChild){
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
                    box[j].style.height = `${parseInt(box[j].innerText) *heightMultiplier}px`
                    box[j+1].style.height = `${parseInt(box[j+1].innerText)*heightMultiplier}px`
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
                    let previousLowest = lowest
                     box[previousLowest].style.backgroundColor = 'azure'
                    lowest = j
                    box[lowest].style.backgroundColor = '#a18cd1'
                    
                }
             
                j++

                if(j === box.length) {

                    console.log(`lowest found = ${box[lowest].innerText}`)
                    box[lowest].style.backgroundColor = 'azure'

                    let temp = box[iteration].innerText
                    box[iteration].innerText = box[lowest].innerText
                    box[lowest].innerText = temp
                    box[iteration].style.height = `${parseInt(box[iteration].innerText)*heightMultiplier}px`
                    box[lowest].style.height = `${parseInt(box[lowest].innerText)*heightMultiplier}px`
                    
                    
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
    arrow.classList.add("show")
    

    let box = document.querySelectorAll(".box")
    let currentBoxLength =  box.length * ( box.length / 2 )
    stopIntervalExecution = false
    let iteration = 1
    let i = 0
    let j = iteration - 1
    let currentVal = parseInt(box[iteration].innerText)
    let hasNotEntered = true
   

    let myfunc = setInterval(function(){

        arrow.classList.remove("found")

        while( i < currentBoxLength ){

            hasNotEntered = true

            // box[j+1].style.backgroundColor = 'azure'
            // box[j].style.backgroundColor = 'azure'
          
            while(j >= 0 && parseInt(box[j].innerText) > currentVal){

                hasNotEntered = false

                box[j+1].innerText = box[j].innerText
                box[j+1].style.height =   `${parseInt(box[j+1].innerText)*heightMultiplier}px` 
                box[j+1].style.backgroundColor = '#2EE59D'
                box[j].style.backgroundColor = '#2EE59D'
                box[iteration].style.backgroundColor = '#a18cd1'


                arrow.style.transform = `translateX(${box[j].getBoundingClientRect().left}px)`
                // arrow.style.transform = `translateY(${box[j].getBoundingClientRect().top}px)`
                arrow.innerText = currentVal

                j--
                
                if(j < 0) {
                    box[iteration].style.backgroundColor = 'azure'
                
                    if(iteration < box.length - 1  ){
                       iteration++
                    }

                    box[j+1].innerText = currentVal
                    arrow.classList.add("found")
                    box[j+1].style.height =   `${parseInt(box[j+1].innerText)*heightMultiplier}px`
                    currentVal = parseInt(box[iteration].innerText)
                    j = iteration - 1
                } 
              
                break;

            }

             if(hasNotEntered) {
                box[iteration].style.backgroundColor = 'azure'

                if(iteration < box.length - 1 ) {
                    iteration++
                }

                box[j+1].innerText = currentVal
                arrow.classList.add("found")
                box[j+1].style.height =   `${parseInt(box[j+1].innerText)*heightMultiplier}px`
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
        while(boxContainer.firstChild){
            boxContainer.removeChild(boxContainer.firstChild)
        }
}

function createBoxes(array){
    for(let i = 0; i < array.length; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        box.innerText = array[i]
        box.style.height = `${parseInt(array[i]) * heightMultiplier}px`
        boxContainer.append(box)
      }
}

// function createHtmlCollec(array){
//     for(let i = 0; i < array.length; i++){
//         let box = document.createElement("div")
//         box.classList.add("box")
//         box.innerText = array[i].innerText
//         box.style.height = `${parseInt(array[i].innerText) * 4}px`
//         boxContainer.append(box)
//       }
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

