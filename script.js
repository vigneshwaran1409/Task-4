/*a).print odd a number*/

var result=[];
function odds (arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odds([15,18,23,14,16,24]));



/*2).convert all the string to title caps in a string Array.*/

function titlecase(arr){
    var res = arr.toString();
    var data=res.toLowerCase().split(" ");
    for(var i=0; i<data.length; i++){
        data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
    }
    return data.join(' ');
}
console.log(titleCase(["this IS jAvAsCrIpT"]));



/*3). sum of all numbers in an array*/
const numbers=[1,2,3,4,5,6,7,8,9];
let sumOfNumbers=numbers.reduce((x,y)=>x+y);
console.log(sumOfNumbers);



/*4.)return the all prime numbers in an Array*/
function  isPrime(n){

    if (n < 2)
    return '${n} is not a Prime'


for(let i=2;i<n;i++){
    if(n%1===0){
        return '${n} is not a Prime number'
    }
}
return '${n} is a Prime number'
}
console.log(isPrime(2));


/*5.)Return all the palindromes in an Array*/

function palindrome (arr){
    var result=[];
    for (var i=0;i<arr.length;i++){
        var data =arr[i].split(" ").reverse().join("");
        if(data===arr[i]){
            result.push(arr[i]);
        }

    }
    return result;
}
console.log(palindrome(['mom','dad','data']));


/*6.)return median of two sorted arrays of the same size*/

let compare=(i,j){
    return i-j;
}
let arr=nums1.concat(nums2).sort(compare);
if(arr.length%2==0){
    return(arr[arr.length/2-1]+arr[arr.length/2])/2;
}
return arr[Math.floor(arr.length/2)];


/*7.) remove duplicates from an array*/
const number=[1,1,2,2,3,4,4,4,4,5,5,6,7,8]
const unique=[new set (numbers)];
console.log(numbers);
console.log(unique);


/*8.)rotate an array by K times*/
var rotate = function(nums,k){
    let i=0
    while(i<k){
        nums.unshift(nums.splice(-1))
        i++
    }
    return nums

};


/*2.)do the below programs in arrow function*/

/*a).print odd a number*/

var result=[];
function odds (arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odds([15,18,23,14,16,24]));



/*2).convert all the string to title caps in a string Array.*/

function titlecase(arr){
    var res = arr.toString();
    var data=res.toLowerCase().split(" ");
    for(var i=0; i<data.length; i++){
        data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
    }
    return data.join(' ');
}
console.log(titleCase(["this IS jAvAsCrIpT"]));



/*3). sum of all numbers in an array*/
const numbers=[1,2,3,4,5,6,7,8,9];
let sumOfNumbers=numbers.reduce((x,y)=>x+y);
console.log(sumOfNumbers);



/*4.)return the all prime numbers in an Array*/
function  isPrime(n){

    if (n < 2)
    return '${n} is not a Prime'


for(let i=2;i<n;i++){
    if(n%1===0){
        return '${n} is not a Prime number'
    }
}
return '${n} is a Prime number'
}
console.log(isPrime(2));


/*5.)Return all the palindromes in an Array*/

function palindrome (arr){
    var result=[];
    for (var i=0;i<arr.length;i++){
        var data =arr[i].split(" ").reverse().join("");
        if(data===arr[i]){
            result.push(arr[i]);
        }

    }
    return result;
}
console.log(palindrome(['mom','dad','data']));






