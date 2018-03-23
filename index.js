function shout(string){
  
  var uppercase = "HELLO!";
  uppercase.toUpperCase() === uppercase;
  
  var lowercase = "hello!";
  lowercase.toLowerCase() === lowercase;
  
  var mixedCase = 'Hi there!';
  
  mixedCase.toLowerCase() === mixedCase;
  mixedCase.toUpperCase() === mixedCase;
  return string.toUpperCase();
}
function whisper(string){
  var lowercase = "hello";
  lowercase.toLowerCase() === lowercase;
  var uppercase = "HELLO";
  uppercase.toLowerCase() === lowercase;
  
  var mixedCase = 'Hi there!';
  
  mixedCase.toLowerCase() === mixedCase;
  mixedCase.toLowerCase() === mixedCase;
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  if(string === string.toLowerCase){
    return "I can\'t hear you!";
  }
  else if(string ===string.toUpperCase()){
    var uppercase = 'YES INDEED';
    return(uppercase);
  }
  else{
    var mixed = 'I love you, too.';
    return mixed;
  }
}
