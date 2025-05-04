//so basically in this we gonna make a linear searching to find the index of the element which we have to search

let array = [23, 34, 45, 66, 32, 66];
let value = 45;
let position;

for(let i=0;i<array.length;i++){
    if(array[i] === value){
        position = i;
        break;
    }

}

if(position){
    console.log("Value exists in the array at the index: ", position);
}else{
    console.log("Value doesn't exist in the array");
}