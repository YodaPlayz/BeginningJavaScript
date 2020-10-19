// your notes here!
console.log("Notes of sec 5");
var number = 0;
//while (number <= 10){
    //if(number % 2 === 0){
      //  console.log("the number is even");
    //}else{
      //  console.log("the number is odd");
    //}
  //  number = number + 1;
//}




//for ( number = 0; number <= 10; number = number + 1){
    
  //  if(number % 2 === 0){
    //    console.log("the number is even");
   // }else{
  //      console.log("the number is odd");
   // }
//};


//print first 100 numbers
var count;

//for (count = 1; count <= 100; count = count + 1){
 //console.log("the number is " + count);   
//}

// print multiple of 3s below 100

for (count = 0; count <= 100; count = count + 1){
 if(count % 3 === 0){
  console.log(count);   
 }
}

var greeting = "hellow world";
console.log(greeting);

var index;

for(index = 0; index < greeting.length; index = index+1){
    console.log(greeting.charAt(index));
}



var removeVowels = function(word){
 if(typeof word !== "string"){
     throw "the input should be a string";
 }
    var result = "";
    var index;
    var currentChar;
    for (index = 0; index < word.length; index = index + 1){
        currentChar = word.charAt(index);
     if(word.charAt(index) !== "a" &&word.charAt(index) !== "e"&& word.charAt(index) !== "o" && word.charAt(index) !== "u" && word.charAt(index) !== "i" ){
     result = result + word.charAt(index);
     }
    }
    
    return result;
}






var LowerCase = function(tweet){
 if (typeof tweet !== "string"){
  throw "no <3";   
 }
    var result = "";
    
    var index;
    
    for(index = 0; index < tweet.length; index = index+ 1){
    if("a" <= tweet.charAt(index) && tweet.charAt(index) <= "z"){
     result = tweet.charAt(index);   
        return result;
      }
    }    
}






