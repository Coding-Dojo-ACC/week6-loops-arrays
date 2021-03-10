var x = [2,4,6];
console.log(x);

var c = ["Hello", "There", "Houston"]; 
var d = c.length;
console.log("var d: ", d)


// declaring a function called alertFunction () is where you would place any parameters
function alertFunction() { 
    alert("What's up doc?")
    console.log("What's up console?")
}

function countFunction() {
    for (i = 0; i <= 10; i++) {
        alert(i)
        console.log(i)
    }
}
// countFunction()

var j = [2,5,7,0,6,11];
var counter = 5;
function ifElseFunction() {
    if(j[counter] > 10) {
        alert("Greater than 10")
        console.log("Greater than 10")
    } else {
        alert("Less than 10")
        console.log("Less than 10")
    }
    // console.log(ifElseFunction())
}

// function oddFunction() {
//     for (i = 0; i <= 7; i++) {
//         if(i % 2 == 1) 
//         alert(i) // Works as predicted
//         // console.log(i) // prints all numbers between 0-7 in th console not just odd however when alert is commented out it does only print odd numbers
//     }
//     // console.log(i)  // Prints 8 in console
// }


// Corrected version below 

function oddFunction() {
    for (i = 0; i <= 7; i++) {
        if(i % 2 == 1) {
            alert(i)
            console.log(i)
        }
    }
}

function evenFunction() {
    for (i = 0; i <= 12; i++) {
        if(i % 2 == 0)
        alert(i)
    }
}

var sum = 0

function sumFunction() {
    for (i = 1; i <= 5; i++) {
        sum += i
        // alert("num: ", i, "sum: ", sum) //  only shows num: in box, when ok is clicked the console does as it is supposed to
        // alert(i, sum) // only shows the num value in box when ok is clicked console does as it is supposed to
        // alert(sum)
        alert("Current Number: " + i + " " + "Current Sum: " + sum)
        console.log('num: ', i, "sum: ", sum)
    }
}

function arrayFunction() {
    var array = []
    for (var i = 1; i <= 20; i++) {
        array.push(i)
    }
    alert(array)
    console.log(array)
}

function avgFunction() {
    var arr = [100,95,80,75,100]
    var sum = 0
    var avg = 0
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    avg = sum / arr.length
    alert("The average is: " + avg)
    console.log(avg)
}


function dinoArray() {
    var dinos = [
        { id: 1, name: "tyrannosaurus", diet: "carnivorous", weight: "7000kg", height: "12m", period: "Late Cretaceous" },
        { name: "stegosaurus", diet: "herbivorous", weight: "2000kg", height: "9m", period: "Late Jurassic", },
        { name: "velociraptor", diet: "carnivorous", weight: "15kg", height: "1.8m", period: "Late Cretaceous", }
    ]
    var arr = []
    for (i = 0; i < dinos.length; i++) {
        arr.push(dinos[i].name)
    }
    alert(arr)
    console.log(arr)
}
function dino2Array() {
    var dinos = [
        { id: 1, name: "tyrannosaurus", diet: "carnivorous", weight: "7000kg", height: "12m", period: "Late Cretaceous" },
        { name: "stegosaurus", diet: "herbivorous", weight: "2000kg", height: "9m", period: "Late Jurassic", },
        { name: "velociraptor", diet: "carnivorous", weight: "15kg", height: "1.8m", period: "Late Cretaceous", }
    ]
    var miniArr = []
    var arr = []
    for (i = 0; i < dinos.length; i++) {
        miniArr.push(dinos[i].name) + miniArr.push(dinos[i].period);
        for (i = 0; i < miniArr.length; i++) {
            arr.push(miniArr[i])
            alert(arr)
            console.log(arr)
        }
    } 
}