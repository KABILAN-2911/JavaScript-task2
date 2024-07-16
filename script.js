//1.Array Creation and Initialization

let arr = [1,2,3,4,5]
console.log(arr);

//2.Array Manipulation

// Add elements
function arrayManipulation(arr){

arr.push(6);
arr.unshift(0);
console.log(arr)

// Remove elements
arr.pop();
arr.shift();
console.log(arr);
}
arrayManipulation(arr);

//3.Array Searching

function arraySearching(arr1){
   console.log(arr1.indexOf(5));
   console.log(arr1.lastIndexOf(5));
   console.log(arr1.includes(3,2));
   let answer = arr1.find((element) => element>3);
   console.log(answer);

}
let arr1=[2,3,4,5,6,7,5,8];
arraySearching(arr1);

//4.Array filter

function arrayfilter(arr2)
{
    let ans = arr2.filter((element)=>element>3)
    console.log(ans);
    
}
let arr2 =[1,2,3,4,5,6]
arrayfilter(arr2)

//5.Array Sorting

let arr3=[2,5,6,8,90,1];
console.log(arr3.sort());
console.log(arr3.reverse());







