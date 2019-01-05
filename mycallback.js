let add = function(num1,num2){
    return  num1 + num2;
}

let multiply = function(num1,num2){
    return  num1 * num2;
}

let calculations = function (num1,num2, callback){
    console.log('You call calculation function !!!');
    return callback(num1,num2);
}


console.log('1. Here is my first callback ' + calculations(1,2,add));  //3
console.log('2. Here is my first callback ' + calculations(1,2,multiply)); // 2
console.log('3. Here is my first callback ' + calculations(5,2, function(num1,num2){ // 3
  return num1-num2;  
}));
