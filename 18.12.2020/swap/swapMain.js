Array.prototype.swap = function(firstI, secondI){
    let temp = this[firstI];
    this[firstI] = this[secondI];
    this[secondI] = temp;
    return this;

}


let arr = [3,99,244,6256];
arr = arr.swap(3,0);
console.log(arr);