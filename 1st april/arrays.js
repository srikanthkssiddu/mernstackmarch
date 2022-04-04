let array = [1,3,5,7];
array.push(9);
console.log("after adding",array);

array.pop(7);
console.log("after removing",array);

array.unshift(2);
console.log("after adding",array);

array.shift();
console.log('after removing',array)


s = array.join("");
console.log("concatination",s)

n=s.split();
console.log("seperate the chrecter of strings into array",n);