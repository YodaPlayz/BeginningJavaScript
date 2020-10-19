// your notes here!
console.log("hello world!");
console.log("poop");

var getTagName = function(tag){
  var result;
    if(tag.charAt(1) !== "/"){
    result = tag.slice(1, tag.length-1);
    } else{
    result = tag.slice(2, tag.length -1);
    }
    return result;
};


var improveTweet = function(tweet){
 var result = tweet;
    if(tweet.toLowerCase().indexOf("lol") === -1){
        result = tweet + " lol";
    }
    return result
}


var tweetReact = function(tweet){
 if(tweet.length > 99){
     console.log("Awesome Sauce");
 }else if(tweet.length > 49){
  console.log("eh");   
 }else{
  console.log("BRO WTF");   
 }
    
}