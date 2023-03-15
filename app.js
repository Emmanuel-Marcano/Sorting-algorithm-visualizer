/********************* Tutorial Section & Algorithm logo ellipses **********************/

let ellipse1 = document.getElementById('ellipse-1')
let ellipse2 = document.getElementById('ellipse-2')
let ellipse3 = document.getElementById('ellipse-3')
let ellipse4 = document.getElementById('ellipse-4')
let ellipse5 = document.getElementById('ellipse-5')
let ellipse6 = document.getElementById('ellipse-6')
let ellipse7 = document.getElementById('ellipse-7')
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
let numberOfPages = 8
let tutorialPageCounter = 0
countDisplay.innerText = `${PageCounter}/${numberOfPages}`

const tutorialInfo = [

    {
        title: "Welcome to Sorting Algorithm Visualizer!",
        secondaryTitle: "Desktop First",
        timeComplexity: "I made this app to be primarily a desktop experience. If you are currently on mobile, feel free to try it out but the user experience will not be as good. If you own a personal computer, i'd recommend to try it out there!",
        tutorialH31: "Why use this?",
        description: "If you are having trouble understanding sorting algorithms, try my app. You'll be able to visualize them every step of the way and create a mental model of how each of them work." ,
        tutorialH32: "Tutorial",
        description2: 'Next stop is a short tutorial. If you want to dive right in, press the "Skip Tutorial" button below. Otherwise, press "Next" to continue with the tutorial.',
        image: "connection.png"
    },

    {
        title: "Welcome to Sorting Algorithm Visualizer!",
        secondaryTitle: "Short Tutorial",
        timeComplexity: "This tutorial will quickly walk you through the set up and features of the algorithm visualizer. It will also briefly give you an explanation of the included algorithms and how they work.",
        tutorialH31: "The Big 3",
        description: "The sorting algorithm visualizer includes the 3 elemental sorting algorithms. They are commonly used and thrive at sorting lists that don't have too many elements.",
        tutorialH32: "Set Up",
        description2: "<ul><li><b>Select the amount</b> of elements you want in the array by using the range input slider at the bottom left of the screen</li><li><b>Select the speed</b> at which you want the array to get sorted with the bottom right slider</li><li><b>Select the algorithm</b> you want to run on the array with the buttons at the top of the screen</li></ul>",
        image: "" 
    },

    {
        title: "Big O Notation",
        secondaryTitle: "What is it?",
        timeComplexity: "In programming, there can be multiple ways to solve a problem. How can we know which solution is more appropiate to use? Luckily, there is a way to compare the performance of different algorithms by using the Big O Notation. It does so by calculating the time taken to run an algorithm as the input grows in size.",
        tutorialH31: "Time Complexity",
        description: "The Big O is calculated by counting the number of operations the computer has to perform to run an algorithm.",
        tutorialH32: "Space Complexity",
        description2: "Time is not the only factor taken into consideration when deciding which algorithm to apply to a problem. The amount of space used by it plays a key role as well. ",
        image: "connection.png" 
    },

    {
        title: "Bubble Sort",
        secondaryTitle: "Description",
        timeComplexity: "Bubble Sort is a sorting algorithm where the largest values bubble up to the top. This is accomplished by comparing every value, starting from the first one, to the one in front of it. The largest of the two values gets swapped to the front. This behaviour creates a bubbling effect where the largest values ascend to the top of the list one by one.",
        tutorialH31: "Time Complexity",
        description: "O/N<sup>2</sup>",
        tutorialH32: "Visualizer",
        description2: "Set the algorithm visualizer to have a speed of 800ms or more to clearly see what is happening. Starting with the first 2 values, a comparison is made to figure out if the left value is larger than the right value, if it is, they swap positions. This process is repeated for every value in the list until it completely sorted.",
        image: "connection.png" 
    },

    {
        title: "Selection Sort",
        secondaryTitle: "Description",
        timeComplexity: "Selection sorting is a sorting algorithm similar to bubble sort, but instead of the largest values ascending to the top of the list, in selection sort, the smallest values get selected one by one and get placed into their sorted position at the beginning of the list.",
        tutorialH31: "Time Complexity",
        description: "O/N<sup>2</sup>",
        tutorialH32: "Visualizer",
        description2: "When you run the selection sort algorithm, during every iteration, the current smallest value gets highlighted with purple. Once the smallest value within an iteration is found, it gets positioned in it's corresponding spot in the list",
        image: "connection.png" 
    },

    {
        title: "Insertion Sort",
        secondaryTitle: "Description",
        timeComplexity: "Insertion sort takes a unique approach compared to the other two. It starts by creating a sorted section of the list, then gradually selecting an element and inserting it in it's correct position of the sorted section. This process it repeated for every single item in the list until it is sorted.",
        tutorialH31: "Time Complexity",
        description: "O/N<sup>2</sup>",
        tutorialH32: "Visualizer",
        description2: "To fully visualize this algorithm, select an amount of 40 elements with a speed of 500ms. When you run it, an arrow will appear at the bottom of the list with the currently selected element to be inserted in it's corresponding position in the sorted section of the list. ",
        image: "connection.png" 
    },

    {
        title: "Quick Sort",
        secondaryTitle: "Description",
        timeComplexity: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe sunt cumque id unde nesciunt itaque. Officiis, nihil enim quam voluptate vero laborum culpa non unde maiores omnis ad deleniti.",
        tutorialH31: "Time Complexity",
        description: "O/N<sup>2</sup>",
        tutorialH32: "Visualizer",
        description2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, adipisci possimus.",
        image: "connection.png" 
    },
    {
        title: "Merge Sort",
        secondaryTitle: "Description",
        timeComplexity: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe sunt cumque id unde nesciunt itaque. Officiis, nihil enim quam voluptate vero laborum culpa non unde maiores omnis ad deleniti.",
        tutorialH31: "Time Complexity",
        description: "O/N<sup>2</sup>",
        tutorialH32: "Visualizer",
        description2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, adipisci possimus.",
        image: "connection.png" 
    },

    

    
]

tutorialNextBtn.addEventListener("click", function(){
   
    if(tutorialPageCounter < tutorialInfo.length - 1){ 
    PageCounter++
    tutorialPageCounter++
    countDisplay.innerText = `${PageCounter}/${numberOfPages}`
    }

    switch(tutorialPageCounter) {
        case 0:
            ellipse1.classList.add("fill")
            break;
        case 1:
          ellipse1.classList.add("fill")
          break;
        case 2:
            ellipse2.classList.add("fill")
          break;
        case 3:
            ellipse3.classList.add("fill")
          break;
        case 4:
            ellipse4.classList.add("fill")
          break;
        case 5:
            ellipse5.classList.add("fill")
          break;
        case 6:
            ellipse6.classList.add("fill")
          break;
        case 7:
            ellipse7.classList.add("fill")
          break;

        default:
      }

    tutorialTitle.innerText = tutorialInfo[tutorialPageCounter].title
    tutorialSecTitle.innerText = tutorialInfo[tutorialPageCounter].secondaryTitle
    tutorialTimeComplex.innerHTML = tutorialInfo[tutorialPageCounter].timeComplexity
    tutorialH31.innerHTML = tutorialInfo[tutorialPageCounter].tutorialH31
    tutorialDescription.innerHTML = tutorialInfo[tutorialPageCounter].description
    tutorialH32.innerText = tutorialInfo[tutorialPageCounter].tutorialH32
    tutorialDescription2.innerHTML = tutorialInfo[tutorialPageCounter].description2
}


)

tutorialPreviousBtn.addEventListener("click", function(){

    switch(tutorialPageCounter) {
       
        case 1:
          ellipse1.classList.remove("fill")
        //   ellipse2.classList.remove("fill")
          break;
        case 2:
            ellipse2.classList.remove("fill")
            // ellipse3.classList.remove("fill")
          break;
        case 3:
            ellipse3.classList.remove("fill")
            // ellipse4.classList.remove("fill")
          break;
        case 4:
            ellipse4.classList.remove("fill")
            // ellipse5.classList.remove("fill")
          break;
        case 5:
            ellipse5.classList.remove("fill")
            // ellipse6.classList.remove("fill")
          break;
        case 6:
            ellipse6.classList.remove("fill")
            // ellipse7.classList.remove("fill")
        case 7:

            ellipse7.classList.remove("fill")
          break;

        default:
    }

    
   
    if(tutorialPageCounter > 0 ){
        PageCounter--
        tutorialPageCounter--
        countDisplay.innerText = `${PageCounter}/${numberOfPages}` 
    }


    tutorialTitle.innerText = tutorialInfo[tutorialPageCounter].title
    tutorialSecTitle.innerText = tutorialInfo[tutorialPageCounter].secondaryTitle
    tutorialTimeComplex.innerHTML = tutorialInfo[tutorialPageCounter].timeComplexity
    tutorialH31.innerText = tutorialInfo[tutorialPageCounter].tutorialH31
    tutorialDescription.innerHTML = tutorialInfo[tutorialPageCounter].description
    tutorialH32.innerText = tutorialInfo[tutorialPageCounter].tutorialH32
    tutorialDescription2.innerHTML = tutorialInfo[tutorialPageCounter].description2
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


        while( i < currentBoxLength){
           
            while( j < box.length - iteration ){
    
                if(j != 0 ){
                    box[j-1].style.backgroundColor = 'azure'
                }
    
                 box[j].style.backgroundColor = '#2EE59D'
                 box[j+1].style.backgroundColor = '#2EE59D'
                
                if(parseInt(box[j].innerText) > parseInt(box[j+1].innerText)){
                    let temp = box[j].innerText
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

            while(j >= 0 && parseInt(box[j].innerText) > currentVal){

                hasNotEntered = false

                box[j+1].innerText = box[j].innerText
                box[j+1].style.height =   `${parseInt(box[j+1].innerText)*heightMultiplier}px` 
                box[j+1].style.backgroundColor = '#2EE59D'
                box[j].style.backgroundColor = '#2EE59D'
                box[iteration].style.backgroundColor = '#a18cd1'


                arrow.style.transform = `translateX(${box[j].getBoundingClientRect().left}px)`
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

