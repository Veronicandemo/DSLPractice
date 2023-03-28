//Given an array of element 'n'  and target element 't' find the index of 't' in the array .Return -1 f the target is not found

//********* PseudoCode **********
//1. Start at the first element in the array and move towards the last
//2. At each element ,check if the the element is equal to the  target element 
//3.if the element is found return the index of the element
//4. If the element is not found return -1.

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1;
}
console.log(linearSearch([-5, 2,10, 4, 6], 10))
console.log(linearSearch([-5, 2,10, 4, 6], 6))
console.log(linearSearch([-5, 2,10, 4, 6], 20))


function linearSearch2(arr, target){
    for(let element = 0; element < arr.length; element++){ 
        if(arr[element] === target){
            return element
        }
    }
    return `Index not found`
}

console.log(linearSearch2([10,50,30,70,80,20,90,40], 20))

///Search 'theArray' for a specified 'KEy' value 

function theArray(theArray, key){
    for(let n =0; n < theArray.length; n++){
        if(theArray[n] === key){ return n}
    }
    return -1
}

console.log(theArray([1,2,3,4,5,6,7,8,9],3))
console.log(theArray([1,2,3,4,5,6,7,8,9], 14))


//
function linearSearch3(array, n, x){
    for(let element = 0; element < n; element++){
        if(array[element] === x){
            return `Element found at index: ${element}`
        }
    }
    return `element not found`
}
let array = [2,4,0,1,9]  //they array on which we are searching 
let n = array.length  // the array lenght
let x = 0  //the target
console.log(linearSearch3(array, n, x))


// Given an array Arr of N elements and a integer K. Your task is to return the position of first occurence of K in the given array.
// Note: Position of first element is considered as 1.
//Complete the function search() which takes an array arr, two integers n and k, as input parameters and returns an 
//integer denoting the answer. Return -1 if the number is not found in array. You don't to print answer or take inputs.
