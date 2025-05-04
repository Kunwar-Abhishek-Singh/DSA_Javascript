//basically in this we will se how can we delete any element from an specific index from an array

let array = [32,23,33,44,41,56];
let position = 3;
for(let i=position;i<array.length;i++){
    array[i] = array[i+1];
}
array.length = array.length-1;
console.log('array after deleting the element from the given index is: ', array)