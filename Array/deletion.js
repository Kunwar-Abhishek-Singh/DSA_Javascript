//basically in this we will se how can we delete any element from an specific index from an array

let array = [32,23,33,44,41,56];
let position = 3;
for(let i=position;i<array.length;i++){
    array[i] = array[i+1];
}
array.length = array.length-1;
console.log('array after deleting the element from the given index is: ', array)


//deletion through predefined keyword "splice"
//array2.splice("starting position", "number of elements wanted to remove")
let array2 = [23, 32, 33, 22, 43, 34, 44]
let position2 = 3;
array2.splice(position2,1);
console.log("array2 is: ",array2 );


