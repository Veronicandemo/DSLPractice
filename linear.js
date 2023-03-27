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
