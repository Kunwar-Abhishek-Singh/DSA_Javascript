//basically in this we have to merge two different arrays into third new array
let array1 = [23, 43, 11, 12, 10];
let array2 = [44, 54, 55, 77, 88];

let array3 = [];
for(let i=0;i<array1.length;i++){
    array3[i] = array1[i];
}

for(let i=0;i<array2.length;i++){
    array3[array1.length+i] = array2[i];
}
console.log("After merging the array3 is: ", array3);