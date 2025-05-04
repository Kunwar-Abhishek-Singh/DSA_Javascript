// in this section we basically try to insert any element at any specific index in the array
let array = [23, 34, 53, 22,12];
let position = 3;
let value = 44;


for(let i= array.length-1;i>=0;i--){
    if(i>=position){
        array[i+1] = array[i]
    }
    if(i == position){
        array[i] = value
    }
}
console.log("array after inserting the element is: ", array)