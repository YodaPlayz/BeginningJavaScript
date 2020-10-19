// your notes here!
console.log("hello world!");
 console.log("this is the types section");

var isNumber = function(potentialNumber){
    return typeof potentialNumber === "number";
};

var isPositiveNumber = function(number){
  return isNumber(number) && number > 0;
   
};

var isYear = function (potentialYear){
  return isPositiveNumber(potentialYear) && potentialYear <== 9999;  
};

var isTweet = function(potentialtweet){
    return potentialtweet.length <= 140;
};

var isLol = function(Tweet){
  return isTweet(tweet) && tweet.indexOf("lol") > -1;
};