function average(numbers){
    let r = 0;
    for(let i=0; i<numbers.length;i++){
        r+=numbers[i]
    }
    return r/numbers.length
}

let n1 = average([1,2,3,4,5,6])
let n2 = average([1,2,3,55,21,33,6])

// console.log(n1)
// console.log(n2)


// ////////////////////////////version1///////////////////////////////////////////
function filterEven(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        // if we want to filter odd "%2 === 1;"
      list.push(arr[i]);
    }
  }
  return list;
}

let n3 = filterEven([1, 2, 3, 4, 5, 6]);
let n4 = filterEven([1, 2, 3, 11, 32, 55, 21]);
// console.log(n3);
// console.log(n4);
// //////////////////////////////////////////////////////////////////////////





//////////////////////version2/////////////////////
let num = [1,2,3,4,5,6];

let myfilter = num.filter((item)=>{
    return item%2==0
})

// console.log(myfilter)
// ////////////////////////////////////////





////////////////////////////////version1////////////////////////////////////////////
function itemsToString(arr){
    let list =[];
    for(let i=0; i<arr.length; i++){
        list.push(arr[i]+"")
    }
    return list;
}

let n5 = itemsToString([1,2,3,4,5,6])
let n6 = itemsToString([1,2,3,11,32,55,21])
// console.log(n5)
// console.log(n6)
/////////////////////////////////////////////////////////////////////////




// ////////////////////version2////////////////////////////////
let o = [1,2,3,4,5,6]
let olist = o.map(function(item){
    return item+"";
})
// console.log(olist)
// ///////////////////////////////////////////////////



// //////////////////////////////////////////////////////
function factorial(x){
    let r=1;
    for(let i=1; i<=x; i++){

         r*=i;
    }
    return r
}

var result = factorial(7);
// console.log(result);
////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////
function factorialRecurse(x){
    if(x===0){
        return console.log("ZERO HAS NO FACTORIAL");;
    }else{
        return x*factorialRecurse(x-1)
    }
}

 var total = factorialRecurse(4)
//  console.log(total);
//////////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// for (i = 0; i <= 60; i += 2) {
//   console.log(i);
// }
// ///////////////////////////////////////////////////